const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/mongoUsers')

usersRouter.post('/', async (request, response) => {
    console.log(request.body)
    const { username, name, password } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const newUser = new User({
        username,
        name,
        passwordHash
    })

    const savedUser = await newUser.save()

    response.status(201).json(savedUser)
})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users)
})

module.exports = usersRouter