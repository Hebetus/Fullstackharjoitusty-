const mongoose = require('mongoose')

const username = process.env.USRNAME
const password = process.env.PASSWORD
const loginUrl = `mongodb+srv://${username}:${password}@cluster0.manjara.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(loginUrl)
    .then(result => {
        console.log('connected to database!')
    })
    .catch(error => {
        console.log('error connecting to database!')
        console.log(error.content)
    })

const postsSchema = new mongoose.Schema({
    author: String,
    content: String,
})
  
const Post = mongoose.model('Post', postsSchema)

/**
 * CONVERT MODULE STRUCTURE TO ONLY EXPORT THE MODEL, MOVE DB OPERATIONS TO index.js
 */
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
        console.log('posts retrieved from database!')
    })
    return posts
}

const deletePost = (objId) => {
    Post.findByIdAndRemove(objId).then(result => {
        console.log(`post ${objId} removed from database!`)
    })
}

const retrieveIndividual = (objId) => {
    Post.findById(objId)
        .then(post => {
            console.log(`post ${objId} retrieved!`)
            return post
        })
        .catch(error => console.log('error retrieving post!'))
}

module.exports = {
    sendPost,
    retrievePosts,
    deletePost,
    retrieveIndividual
}