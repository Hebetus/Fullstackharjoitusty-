const usersRouter = require('express').Router()
const User = require('../models/mongoUsers')

usersRouter.get('/', (request, response) => {
    const users = User.find({})
    response.send(users)
})

module.exports = usersRouter