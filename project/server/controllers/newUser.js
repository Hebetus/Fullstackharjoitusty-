const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/mongoUsers')

usersRouter.post('/', async (request, response) => {
    const { username, name, password } = request.body
    console.log(username, name, password)

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    console.log(passwordHash)
    const newUser = new User({
        username,
        name,
        passwordHash
    })

    const savedUser = await newUser.save()
    console.log(savedUser)
    response.status(201).json(savedUser)
    console.log('saved new user to database!')
})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users)
})

module.exports = usersRouter