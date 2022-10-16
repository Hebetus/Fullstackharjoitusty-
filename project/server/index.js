const express = require('express')
const cors = require('cors')
const ObjectId = require('mongodb').ObjectId

const mongoPosts = require('./models/mongoPosts')
const mongoUsers = require('./models/mongoUsers')
const Post = mongoPosts.Post
const User = mongoUsers.User

let posts = []
Post.find({}).then(result => {
        result.forEach(post => {
            posts.push(post)
    })
    console.log('posts retrieved from database!')
})

const app = express()
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

const requestLogger = (request, response, next) => {
    console.log('!NEW HTTP MESSAGE!')
    console.log('METHOD: ', request.method)
    console.log('PATH: ', request.path)
    console.log('BODY: ', request.body)
    next()
}

app.use(requestLogger)

app.get('/api/posts/:id', (request, response) => {
    const objId = new ObjectId(request.params.id)
    Post.findById(objId)
        .then(result => {
            console.log(`post ${objId} retrieved!`)
            response.send(result)
        })
        .catch(error => console.log('error retrieving post!'))
})

app.get('/api/posts/', (request, response) => {
    response.send(posts)
})

app.post('/api/posts/', (request, response) => {
    const sentPost = new Post({
        author: request.body.author,
        content: request.body.content
    })
    sentPost.save().then(result => {
        console.log('post saved through mongo module!')
    })
})

app.put('/api/posts/:id', (request, response) => {
    console.log(`${request.body} modification sent to server!`)
    response.status(204).end()
})

app.delete('/api/posts/:id', (request, response) => {
    const id = request.params.id
    const objId = new ObjectId(id)
    Post.findByIdAndRemove(objId).then(result => {
        console.log(`post ${objId} removed from database!`)
    })
    response.status(204).end()
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})