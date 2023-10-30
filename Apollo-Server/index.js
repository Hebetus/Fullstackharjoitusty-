require('dotenv').config()
const { ApolloServer, gql } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const typeDefs = require('./typedefs')

/**
 * The mongodb modules listed below aren't currently used
 */

const mongoose = require('mongoose')
const { Post } = require('./models/mongoose')
const username = process.env.USRNAME
const password = process.env.PASSWORD
const loginUrl = `mongodb+srv://${username}:${password}@cluster0.manjara.mongodb.net/?retryWrites=true&w=majority`

const { connectToDatabase, sequelize } = require('./SQLclient')
const { User, SQLPost, VisitorCount, Favorited, Vote, Reply, ReplyVote } = require('./models')

const AuthService = require('./utils/authService')

mongoose.connect(loginUrl)
    .then((response) => {
        console.log(`Apollo server connected to mongoose database: ${loginUrl} ${response}`)
    })
    .catch((error) => {
        console.log(`Problem connecting to database: ${error.message}`)
    })

const resolvers = {
    Query: {
        allPosts: async (loading) => {
            const posts = await SQLPost.findAll({})
            const values = posts.map(post => post.dataValues)
            return values
        },
        postLikes: async (root, args, loading) => {
            const postVotes = await Vote.findAll({
                attributes: ['liked'],
                where: {
                    post_id: args.id
                }
            })
            const values = postVotes.map(vote => vote.dataValues)

            if (postVotes) {
                let likes = 0
                values.forEach(vote => {
                    if (vote.liked) {
                        likes++
                    }
                    else {
                        likes--
                    }
                })
                return likes
            }
            else {
                return 0
            }
        },
        postReplies: async (root, args, loading) => {
            const postReplies = await Reply.findAll({
                where: {
                    post_id: args.id
                }
            })
            const values = postReplies.map(reply => reply.dataValues)
            if (values) {
                return values
            }
            else {
                return null
            }
        },
        isFavorite: async (root, args, loading) => {
            const favorite = await Favorited.findOne({
                where: {
                    user_id: args.userId,
                    post_id: args.postId
                }
            })
            if (favorite) {
                return true
            }
            else {
                return false
            }
        },
        replyLikes: async (root, args, loading) => {
            const replyVotes = await ReplyVote.findAll({
                attributes: ['liked'],
                where: {
                    reply_id: args.id
                }
            })
            const values = replyVotes.map(reply => reply.dataValues)

            if (replyVotes) {
                let likes = 0
                values.forEach(vote => {
                    if (vote) {
                        likes++
                    }
                    else {
                        likes--
                    }
                })
                return likes
            }
            else {
                return 0
            }
        },
        visitorCount: async (loading) => {
            const visitations = await VisitorCount.findAll({})
            const count = visitations[0].dataValues.count
            
            const id = 0
            const visitorCount = await VisitorCount.findByPk(id)
            visitorCount.count++
            await visitorCount.save()
            console.log(visitorCount)
            return count
        },
        userProfile: async (root, args, loading) => {
            const user = await User.findByPk(args.id)
            return user
        },
        vote: async (root, args, loading) => {
            const vote = await Vote.findOne({
                where: {
                    user_id: args.userId,
                    post_id: args.postId
                }
            })
            let returnVote = {
                upvote: false,
                downvote: false
            }
            if (vote) {
                if (vote.dataValues.liked) {
                    returnVote.upvote = true
                }
                else {
                    returnVote.downvote = true
                }
                console.log(vote, returnVote)
                return returnVote
            }
            else {
                return returnVote
            }
        }
    },
    Post: {
        id: (root) => root.id,
        parent: (root) => root.parent,
        postedAt: (root) => root.postedAt,
        likes: (root) => root.likes,
        topic: (root) => root.topic,
        picture: (root) => root.picture,
        userId: (root) => root.userId,
        content: (root) => root.content,
    },
    User: {
        id: (root) => root.id,
        signupDate: (root) => root.signupDate,
        profilePic: (root) => root.profilePic,
        username: (root) => root.username,
        passwordhash: (root) => root.passwordhash,
        name: (root) => root.name,
        email: (root) => root.email
    },
    Mutation: {
        addPost: async (_, param) => {
            try {
                const posts = await SQLPost.findAll({})
                const values = posts.map(post => post.dataValues)
                const id = values.length

                const newPost = SQLPost.build({
                    id,
                    parent: param.parent,
                    postedAt: new Date(),
                    likes: 0,
                    topic: param.topic,
                    picture: param.picture,
                    userId: param.userId,
                    content: param.content
                })
                newPost.save()
                return true
            }
            catch (error) {
                console.log(error)
                return false
            }
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
        addReply: async (_, param) => {
            try {
                const replies = await Reply.findAll({})
                const values = replies.map(reply => reply.dataValues)
                const id = values.length

                const newReply = Reply.build({
                    content: param.content,
                    pic: param.pic,
                    likes: 0,
                    date: new Date(),
                    postId: param.postId,
                    userId: param.userId
                })
                newReply.save()
                return true
            }
            catch (error) {
                console.log(error)
                return false
            }
        },
        likeReply: async (_, param) => {
            console.log(param)

            return true
        },
        dislikeReply: async (_, param) => {
            console.log(param)

            return true
        },
        addFavorite: async (_, param) => {
            try {
                const favorites = await Favorited.findAll({})
                const values = favorites.map(favorite => favorite.dataValues)
                const id = values.length

                const userFavorites = await Favorited.findAll({
                    where: {
                        user_id: param.userId,
                        post_id: param.postId
                    }
                })
                const userValues = userFavorites.map(favorite => favorite.dataValues)
                if (userValues.length > 0) {
                    return false
                }

                const newFavorite = Favorited.build({
                    id,
                    userId: param.userId,
                    postId: param.postId
                })
                await newFavorite.save()
                return true
            }
            catch (error) {
                console.log(error)
                return false
            }
        },
        removeFavorite: async (_, param) => {
            try {
                const favorite = await Favorited.destroy({
                    where: {
                        userId: param.userId,
                        postId: param.postId
                    }
                })
                return true
            }
            catch (error) {
                console.log(error)
                return false
            }
        },
        vote: async (_, param) => {
            try {
                const votes = await Vote.findAll({})
                const values = votes.map(vote => vote.dataValues)
                const id = values.length

                const userVotes = await Vote.findAll({
                    where: {
                        user_id: param.userId,
                        post_id: param.postId
                    }
                })
                const userValues = userVotes.map(vote => vote.dataValues)
                if (userValues.length > 0) {
                    if (userValues[0].liked !== param.like) {
                        const vote = await Vote.findByPk(userValues[0].id)
                        vote.liked = param.like
                        await vote.save()
                        return true
                    }
                    return false
                }

                const newVote = await Vote.create({
                    userId: param.userId,
                    postId: param.postId,
                    liked: param.like
                })
                return true
            }
            catch (error) {
                console.log(error)
                return false
            }
        },
        removeVote: async (_, param) => {
            try {
                const vote = await Vote.destroy({
                    where: {
                        userId: param.userId,
                        postId: param.postId
                    }
                })
                return true
            }
            catch (error) {
                console.log(error)
                return false
            }
        },
        voteReply: async (_, param) => {
            try {
                const replyvotes = await ReplyVote.findAll({})
                const values = replyvotes.map(replyvote => replyvote.dataValues)
                const id = values.length

                const userVotes = await ReplyVote.findAll({
                    where: {
                        user_id: param.userId,
                        reply_id: param.replyId
                    }
                })
                const userValues = userVotes.map(vote => vote.dataValues)
                if (userValues.length > 0) {
                    if (userValues[0].liked !== param.liked) {
                        const vote = await ReplyVote.findByPk(userValues[0].id)
                        vote.liked = param.liked
                        await vote.save()
                        return true
                    }
                    return false
                }

                const newVote = ReplyVote.build({
                    id,
                    userId: param.userId,
                    replyId: param.replyId,
                    liked: param.liked
                })
                await newVote.save()
                return true
            }
            catch (error) {
                console.log(error)
                return false
            }
        },
        removeVoteReply: async (_, param) => {
            try {
                const voteReply = await ReplyVote.destroy({
                    where: {
                        userId: param.userId,
                        replyId: param.replyId
                    }
                })
            }
            catch (error) {
                console.log(error)
                return false
            }
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
    connectToDatabase()
    console.log(`Server running at: ${url}`)
})