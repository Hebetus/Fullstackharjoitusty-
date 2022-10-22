const postsRouter = require('express').Router()
const mongoPosts = require('../models/mongoPosts')
const ObjectId = require('mongodb').ObjectId

const Post = mongoPosts

postsRouter.put('/', (request, response) => {
    console.log(`${request.body} modification sent to server!`)
    response.status(204).end()
})

postsRouter.delete('/', (request, response) => {
    const id = request.params.id
    const objId = new ObjectId(id)
    Post.findByIdAndRemove(objId).then(result => {
        console.log(`post ${objId} removed from database!`)
    })
    response.status(204).end()
})

module.exports = postsRouter