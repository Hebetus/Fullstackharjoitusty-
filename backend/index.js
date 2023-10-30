const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { Sequelize } = require('sequelize')

const postsRouter = require('./controllers/posts')
const modificationRouter = require('./controllers/modifyPost')
const newUserRouter = require('./controllers/newUser')
const loginRouter = require('./controllers/login')
const unknownEndpoint = require('./controllers/uknownEndpoint')

const requestLogger = require('./middleware/requestLogger')
const errorLogger = require('./middleware/errorHandler')
const { connectToDatabase } = require('./SQLclient')

const app = express()
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use(requestLogger)

app.use('/api/posts/', postsRouter)

app.use('/api/posts/:id', modificationRouter)

app.use('/api/users/', newUserRouter)

app.use('/api/login/', loginRouter)

app.use(unknownEndpoint)

app.use(errorLogger)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    connectToDatabase()
    console.log(`server running on port ${PORT}`)
})