import { gql } from '@apollo/client'

export const ALL_POSTS = gql`
    query {
        allPosts {
            _id
            author
            content
            date
            likes
            replies {
                author
                content
                date
                likes
            }
            user
        }
    }  
`