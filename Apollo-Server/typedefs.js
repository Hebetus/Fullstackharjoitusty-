const typeDefs = `
    type Post {
        id: Int!
        parent: Int
        postedAt: String!
        likes: Int!
        topic: String!
        picture: String
        userId: Int!
        content: String!
    }
    type Reply {
        id: Int!
        content: String!
        pic: String
        date: String!
        userId: Int!
    }
    type User {
        id: Int!
        signupDate: String!
        profilePic: String!
        username: String!
        passwordhash: String!
        name: String!
        email: String!
    }
    type Vote {
        upvote: Boolean!
        downvote: Boolean!
    }
    type Query {
        allPosts: [Post]!
        postLikes(id: Int!): Int!
        postReplies(id: Int!): [Reply]
        isFavorite(userId: Int!, postId: Int!): Boolean!
        replyLikes(id: Int!): Int!
        visitorCount: Int!
        userProfile(id: Int!): User!
        vote(userId: Int!, postId: Int!): Vote!
    }
    type Mutation {
        addPost(parent: Int, topic: String, picture: String, userId: Int!, content: String!): Boolean!
        increaseLikes(id: String!): Boolean!
        decreaseLikes(id: String!): Boolean!
        deletePost(id: String!): Boolean!
        addReply(content: String!, pic: String, postId: Int!, userId: Int!): Boolean!
        likeReply(id: String!, index: Int!): Boolean!
        dislikeReply(id: String!, index: Int!): Boolean!
        addFavorite(userId: Int!, postId: Int!): Boolean!
        removeFavorite(userId: Int!, postId: Int!): Boolean!
        vote(userId: Int!, postId: Int!, like: Boolean!): Boolean!
        removeVote(userId: Int!, postId: Int!): Boolean!
        voteReply(userId: Int!, replyId: Int!, liked: Boolean!): Boolean!
        removeVoteReply(userId: Int!, replyId: Int!): Boolean!
    }
`

module.exports = typeDefs