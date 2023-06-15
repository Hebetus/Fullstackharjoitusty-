const postsRouter = require('express').Router()
const mongoPosts = require('../models/mongoPosts')

const Post = mongoPosts
const ObjectId = require('mongodb').ObjectId

postsRouter.get('/', (request, response) => {
    console.log(request.body)
    const objId = new ObjectId(request.params.id)
    Post.findById(objId)
        .then(result => {
            console.log(`post ${objId} retrieved!`)
            response.send(result)
        })
        .catch(error => console.log('error retrieving post!'))
})

module.exports = postsRouter