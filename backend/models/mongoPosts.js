const mongoose = require('mongoose')

const username = process.env.USRNAME
const password = process.env.PASSWORD
const loginUrl = `mongodb+srv://${username}:${password}@cluster0.manjara.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(loginUrl)
    .then(result => {
        console.log('connected to posts collection!')
    })
    .catch(error => {
        console.log('error connecting to database!')
        console.log(error.content)
    })

const postsSchema = new mongoose.Schema({
    author: String,
    content: String,
    date: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})
  
const Post = mongoose.model('Post', postsSchema)

module.exports = Post