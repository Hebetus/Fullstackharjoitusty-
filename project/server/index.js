const express = require('express')
const cors = require('cors')

const individualPostRouter = require('./controllers/individualPost')
const postsRouter = require('./controllers/posts')
const modificationRouter = require('./controllers/modifyPost')

const newUserRouter = require('./controllers/newUser')

const unknownEndpoint = require('./controllers/uknownEndpoint')

const requestLogger = require('./middleware/requestLogger')

const ObjectId = require('mongodb').ObjectId
const mongoPosts = require('./models/mongoPosts')
const mongoUsers = require('./models/mongoUsers')
const Post = mongoPosts
const User = mongoUsers

const app = express()
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

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

/**
 * TO BE FULLY IMPLEMENTED
 * TRY MOVING ALL ENPOINTS TO A SINGLE FILE
app.use('/api/posts/:id', individualPostRouter)
*/

app.use('/api/posts/', postsRouter)

app.use('/api/posts/:id', modificationRouter)

app.use('/api/users/', newUserRouter)

app.use(unknownEndpoint)

/**
 * MOVE ERROR HANDLER TO RESPECTIVE FILE
*/

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})