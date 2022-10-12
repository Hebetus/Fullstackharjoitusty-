const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId

const data = require('./data')
const mongo = require('./mongo')

let posts = mongo.retrievePosts()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

/**
 * ADD MIDDLEWARE FOR UNKNOWN ENPOINTS/URL AND FOR ERROR HANDLING
 */

 app.get('api/posts/:id', (request, response) => {
    const id = new ObjectId(request.params.id)
    const post = mongo.retrieveIndividual(id)
    response.json(post)
})

app.get('/api/posts/', (request, response) => {
    response.send(posts)
})

app.post('/api/posts/', (request, response) => {
    mongo.sendPost(request.body.author, request.body.content)
})

app.delete('/api/posts/:id', (request, response) => {
    const id = request.params.id
    const objId = new ObjectId(id)
    mongo.deletePost(objId)
    response.status(204).end()
})

/**
 * IMPLEMENT RETRIEVAL OF A SINGLE POST
 */

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})