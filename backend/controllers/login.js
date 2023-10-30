const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const loginRouter = require('express').Router()
const { User } = require('../sequelize_models')

loginRouter.post('/', async (request, response) => {
    const { username, password } = request.body

    const user = await User.findOne({
        where: {
            username: username
        }
    })
    const userData = user.dataValues
    const passwordCorrect = userData === null
        ? false
        : bcrypt.compare(password, userData.passwordhash)
    
    if (!(userData && passwordCorrect)) {
        return response.status(401).json({
            error: 'invalid username or password'
        })
    }

    const userForToken = {
        username: userData.username,
        id: userData.id.toString()
    }

    const token = jwt.sign(userForToken, process.env.SECRET)
    console.log(`user: ${username} password: ${password} logged in!`)
    response
        .status(200)
        .send({ token, username: userData.username, name: userData.name, profile: {
            userId: userData.id,
            signupDate: userData.signupDate,
            profilePic: userData.profilePic,
            username: userData.username,
            name: userData.name,
            email: userData.email
        }
    })
})

module.exports = loginRouter