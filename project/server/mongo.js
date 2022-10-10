const mongoose = require('mongoose')

/**
 * INITIAL LOGIN FUNCTIONALITY FOR CLI LOGIN
if(process.argv.length < 3) {
    console.log('give username and password as arguments')
    process.exit(1)
}

const password = process.argv[2]
*/

const databaseUrl = 'mongodb+srv://fullstack:7MSAZ1cj1NwXZmad@cluster0.manjara.mongodb.net/?retryWrites=true&w=majority'

/**
 * ADD ERROR HANDLER FOR CONNECTION REFUSAL
*/
mongoose.connect(databaseUrl)

const postsSchema = new mongoose.Schema({
    author: String,
    content: String,
    id: Number
})
  
const Post = mongoose.model('Post', postsSchema)

const sendPost = (author, content) => {
    const sentPost = new Post({
        author: author,
        content: content
    })
    sentPost.save().then(result => {
        console.log('post saved through mongo module!')
    })
}

const retrievePosts = () => {
    let posts = []
    Post.find({}).then(result => {
        result.forEach(post => {
            posts.push(post)
        })
        console.log(posts)
    })
    return posts
}

module.exports = {
    sendPost,
    retrievePosts
}