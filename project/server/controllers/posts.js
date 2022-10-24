const postsRouter = require('express').Router()
const mongoPosts = require('../models/mongoPosts')
const mongoUsers = require('../models/mongoUsers')
const ObjectId = require('mongodb').ObjectId

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

postsRouter.post('/', async (request, response) => {
    const objId = new ObjectId(request.body.userId)    
    const user = await User.findById(objId)

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