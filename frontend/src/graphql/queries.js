import { gql } from '@apollo/client'

export const ALL_POSTS = gql`
    query {
        allPosts {
            content
            id
            likes
            postedAt
            topic
            userId
            picture
        }
    }  
`

export const POST_LIKES = gql`
    query postLikes($postLikesId: Int!) {
        postLikes(id: $postLikesId)
    }
`

export const POST_REPLIES = gql`
    query postReplies($postRepliesId: Int!) {
        postReplies(id: $postRepliesId) {
            content
            id
            pic
            date
            userId
        }
    }
`

export const IS_FAVORITE = gql`
    query isFavorite($userId: Int!, $postId: Int!) {
        isFavorite(userId: $userId, postId: $postId)
    }
`

export const HAS_VOTED = gql`
    query vote($userId: Int!, $postId: Int!) {
        vote(userId: $userId, postId: $postId) {
            downvote
            upvote
        }
    }
`

export const VISITOR_COUNT = gql`
    query {
        visitorCount
    }
`

export const USER_PROFILE = gql`
    query userProfile($userProfileId: Int!) {
        userProfile(id: $userProfileId) {
            id
            username
        }
    }
`