const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user: String, //USED AS KEY FOR RELATION LATER ON
    content: String,
    author: String,
    date: Date
})

const userShhema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    passwordHash: String,
    posts: [String]
})

module.exports = {
    Post: mongoose.model('Post', postSchema),
    User: mongoose.model('User', userShhema)
}