const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const data = require('./data')
const mongo = require('./mongo')

const posts = mongo.retrievePosts()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.get('/api/posts/', (request, response) => {
    response.send(posts)
})

app.post('/api/posts/', (request, response) => {
    mongo.sendPost(request.body.author, request.body.content)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Selain käynnissä portissa 3001')
})