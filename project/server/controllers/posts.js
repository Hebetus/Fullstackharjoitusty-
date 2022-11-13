const postsRouter = require('express').Router()
const mongoPosts = require('../models/mongoPosts')
const mongoUsers = require('../models/mongoUsers')
const ObjectId = require('mongodb').ObjectId
const jwt = require('jsonwebtoken')

const Post = mongoPosts
const User = mongoUsers

let posts = []
Post.find({}).then(result => {
        result.forEach(post => {
            posts.push(post)
    })
    console.log('posts retrieved from database!')
})

postsRouter.get('/', (request, response) => {
    response.send(posts)
})

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

postsRouter.post('/', async (request, response) => {
    const body = request.body
    const token = getTokenFrom(request)
    let decodedToken
    console.log(token)
    
    try {
        decodedToken = jwt.verify(token, process.env.SECRET)
    }
    catch (error) {
        console.log('Invalid token!')
        console.log(error)
    }

    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid'})
    }

    const user = await User.findById(decodedToken.id)
    console.log(user)

    const sentPost = new Post({
        author: request.body.author,
        content: request.body.content,
        date: new Date(),
        user: user._id
    })

    const savedPost = await sentPost.save()
    user.posts = user.posts.concat(savedPost._id)
    await user.save()

    response.send(savedPost)
})

module.exports = postsRouter