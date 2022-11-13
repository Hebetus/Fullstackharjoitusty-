const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/mongoUsers')

loginRouter.post('/', async (request, response) => {
    const { username, password } = request.body

    const user = await User.findOne({ username })
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(password, user.passwordHash)
    
    if (!(user && passwordCorrect)) {
        return response.status(401).json({
            error: 'invalid username or password'
        })
    }

    const userForToken = {
        username: user.username,
        id: user._id.toString()
    }

    console.log(userForToken)
    const token = jwt.sign(userForToken, process.env.SECRET)
    console.log(`user: ${username} password: ${password} logged in!`)

    response
        .status(200)
        .send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter