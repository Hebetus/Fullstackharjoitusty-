import { gql } from '@apollo/client'

export const ADD_LIKE = gql`
    mutation IncreaseLikes($id: String!) {
        increaseLikes(id: $id)
    }
`

export const ADD_DISLIKE = gql`
    mutation DecreaseLikes($id: String!) {
        decreaseLikes(id: $id)
    }
`

export const ADD_REPLY = gql`
    mutation AddReply($content: String!, $postId: Int!) {
        addReply(content: $content, postId: $postId)
    }
`

export const ADD_POST = gql`
    mutation AddPost($content: String!, $author: String!) {
        addPost(content: $content, author: $author)
    }
`

export const VOTE = gql`
    mutation Vote($userId: Int!, $postId: Int!, $like: Boolean!) {
        vote(userId: $userId, postId: $postId, like: $like)
    }
`

export const REMOVE_VOTE = gql`
    mutation removeVote($userId: Int!, $postId: Int!) {
        removeVote(userId: $userId, postId: $postId)
    }
`

export const FAVORITE = gql`
    mutation addFavorite($userId: Int!, $postId: Int!) {
        addFavorite(userId: $userId, postId: $postId)
    }
`

export const REMOVE_FAVORITE = gql`
    mutation removeFavorite($userId: Int!, $postId: Int!) {
        removeFavorite(userId: $userId, postId: $postId)
    }
`

export const REPLY = gql`
    mutation addReply($content: String!, $postId: Int!, $userId: Int!) {
        addReply(content: $content, postId: $postId, userId: $userId)
    }
`

export const VOTE_REPLY = gql`
    mutation VoteReply($userId: Int!, $replyId: Int!, $liked: Boolean!) {
        voteReply(userId: $userId, replyId: $replyId, liked: $liked)
    }
`

export const REMOVE_VOTE_REPLY = gql`
    mutation removeVoteReply($userId: Int!, $replyId: Int!) {
        removeVoteReply(userId: $userId, replyId: $replyId)
    }
`

export const POST = gql`
    mutation AddPost($userId: Int!, $content: String!) {
        addPost(userId: $userId, content: $content)
    }
`