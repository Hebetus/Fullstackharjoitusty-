const postsRouter = require('express').Router()
const mongoPosts = require('../models/mongoPosts')

const Post = mongoPosts

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

postsRouter.post('/', (request, response) => {
    const sentPost = new Post({
        author: request.body.author,
        content: request.body.content,
        date: new Date(),
        user: null
    })

    sentPost.save().then(result => {
        console.log('post saved through mongo module!')
    })

    response.status(204).end()
})

module.exports = postsRouter