const { ApolloServer, gql } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

const mongoose = require('mongoose')
const { Post } = require('./models/mongoose')
require('dotenv').config()

const username = process.env.USRNAME
const password = process.env.PASSWORD
const loginUrl = `mongodb+srv://${username}:${password}@cluster0.manjara.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(loginUrl)
    .then((response) => {
        console.log(`Apollo server connected to mongoose database: ${loginUrl} ${response}`)
    })
    .catch((error) => {
        console.log(`Problem connecting to database: ${error.message}`)
    })

const typeDefs = `
    type Post {
        author: String!
        content: String!
        date: Date
    }
    type User {
        email: String!
        username: String!
        name: String!
        passwordHash: String!
        posts: [Post]!
    }
    type Date {
        value: String
    }
    type Query {
        allPosts: [Post]!
        individualPost(id: String!): Post!
        userPosts(id: String!): [Post]!
    }
`

const resolvers = {
    Query: {
        allPosts: async (loading) => Post.find({}),
        individualPost: async (root, args, loading) => Post.findOne({id: args.id })
    },
    Post: {
        author: (root) => root.author,
        content: (root) => root.content,
        date: (root) => root.date
    },
    User: {
        email: (root) => root.email,
        username: (root) => root.username,
        name: (root) => root.name,
        passwordHash: (root) => root.passwordHash,
        posts: (root) => root.posts
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

startStandaloneServer(server, {
    listen: { port: 8080 },
}).then(({ url }) => {
    console.log(`Server running at: ${url}`)
})