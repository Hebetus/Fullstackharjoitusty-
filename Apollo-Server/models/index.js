const User = require('./user')
const SQLPost = require('./post')
const VisitorCount = require('./visitor_count')
const Favorited = require('./favorited')
const Vote = require('./voted')
const Reply = require('./reply')
const ReplyVote = require('./reply_voted')

User.hasMany(SQLPost)
SQLPost.belongsTo(User)

User.hasMany(Favorited)
SQLPost.hasMany(Favorited)

User.hasMany(Vote)
SQLPost.hasMany(Vote)

SQLPost.hasMany(Reply)
Reply.belongsTo(SQLPost)

User.hasMany(ReplyVote)
Reply.hasMany(ReplyVote)

module.exports = {
    User, SQLPost, VisitorCount, Favorited, Vote, Reply, ReplyVote
}