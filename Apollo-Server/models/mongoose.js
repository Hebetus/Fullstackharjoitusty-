const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user: String,
    content: String,
    author: String,
    date: String,
    likes: Number,
    replies: [{
        author: String,
        content: String,
        date: String,
        likes: Number
    }]
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    passwordHash: String,
    posts: [String]
})

module.exports = {
    Post: mongoose.model('Post', postSchema),
    User: mongoose.model('User', userSchema)
}