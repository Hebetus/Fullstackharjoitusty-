const mongoose = require('mongoose')

const username = process.env.USRNAME
const password = process.env.PASSWORD
const loginUrl = `mongodb+srv://${username}:${password}@cluster0.manjara.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(loginUrl)
    .then(result => {
        console.log('connected to users collection!')
    })
    .catch(error => {
        console.log('error connecting to database!')
        console.log(error.content)
    })

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    passwordHash: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
})

const User = mongoose.model('User', userSchema)

module.exports = User