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
        _id: String!
        author: String!
        content: String!
        date: String
        user: String
        likes: Int
        replies: [Reply]
    }
    type Reply {
        author: String
        content: String
        date: String
        likes: Int
    }
    type User {
        email: String!
        username: String!
        name: String!
        passwordHash: String!
        posts: [Post]!
    }
    type Query {
        allPosts: [Post]!
        individualPost(id: String!): Post!
        userPosts(id: String!): [Post]!
    }
    type Mutation {
        addPost(content: String!, author: String!): Boolean!
        increaseLikes(id: String!): Boolean!
        decreaseLikes(id: String!): Boolean!
        deletePost(id: String!): Boolean!
        addReply(id: String!, reply: String!, author: String): Boolean!
        likeReply(id: String!, index: Int!): Boolean!
        dislikeReply(id: String!, index: Int!): Boolean!
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
    },
    Mutation: {
        addPost: async (content, author) => {
            const sentPost = new Post({
                author: author.author,
                content: author.content,
                date: new Date(),
                user: 'Default',
                likes: 0,
                replies: []
            })

            await sentPost.save()

            return true
        },
        increaseLikes: async (_, id) => {
            await Post.findOneAndUpdate(
                { "_id": id.id },
                { $inc: { "likes": 1 } }
            )

            return true
        },
        decreaseLikes: async (_, id) => {
            await Post.findOneAndUpdate(
                { "_id": id.id },
                { $inc: { "likes": -1 } }
            )

            return true
        },
        deletePost: async (_, id) => {
            await Post.findByIdAndDelete(id.id)

            return true
        },
        addReply: async (id, reply, author) => {
            const newReply = {
                author: reply.author,
                content: reply.reply,
                date: new Date(),
                likes: 0
            }

            console.log(newReply)
            
            await Post.findByIdAndUpdate(
                { "_id": reply.id },
                { $push: { replies: newReply } }
            )
            

            return true
        },

        /**
         * TO BE IMPLEMENTED
         * MIGHT BE LESS PAINFUL TO JUST CREATE
         * A SEPARATE COLLECTION FOR REPLIES THAT
         * THEN REFERENCE POSTS
         */

        likeReply: async (id, index) => {
            console.log(index.id, index.index)

            return true
        },
        dislikeReply: async (id, index) => {
            console.log(index.id, index.index)

            return true
        }
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