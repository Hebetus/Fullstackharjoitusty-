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
    mutation AddReply($addReplyId: String!, $reply: String!) {
        addReply(id: $addReplyId, reply: $reply)
    }
`

export const ADD_POST = gql`
    mutation AddPost($content: String!, $author: String!) {
        addPost(content: $content, author: $author)
    }
`