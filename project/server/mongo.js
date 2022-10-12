const mongoose = require('mongoose')

const username = process.env.USRNAME
const password = process.env.PASSWORD
const loginUrl = `mongodb+srv://${username}:${password}@cluster0.manjara.mongodb.net/?retryWrites=true&w=majority`

/**
 * ADD ERROR HANDLER FOR CONNECTION REFUSAL
*/

mongoose.connect(loginUrl)

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
    Post.findById(objId).then(post => {
        console.log(`post ${objId} retrieved!`)
        return post
    })
}

module.exports = {
    sendPost,
    retrievePosts,
    deletePost,
    retrieveIndividual
}