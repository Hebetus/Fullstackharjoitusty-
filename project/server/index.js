const express = require('express')
const cors = require('cors')
const ObjectId = require('mongodb').ObjectId

const mongo = require('./models/mongo')

let posts = mongo.retrievePosts()

const app = express()
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

/**
 * TO BE FULLY IMPLEMENTED!
const requestLogger = () => {

}

app.use(requestLogger)
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

/**
 * IMPLEMENT MODIFICATION OF INDIVIDUAL POST
 */

app.delete('/api/posts/:id', (request, response) => {
    const id = request.params.id
    const objId = new ObjectId(id)
    mongo.deletePost(objId)
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