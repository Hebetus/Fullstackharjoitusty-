import { useSelector, useDispatch } from 'react-redux'
import { postsChange, removePost, addPost } from '../reducers/postsReducer'
import { gql, useQuery } from '@apollo/client'

import Post from './Post'
import Newpost from './Newpost'

const Posts = () => {
    const dispatch = useDispatch()
    const setPosts = (content) => {
        dispatch(postsChange(content))
    }
    const deletePost = (id) => {
        dispatch(removePost(id))
    }
    const addNewPost = (newPost) => {
        dispatch(addPost(newPost))
    }

    const listStyle = {
        margin: 0
    }

    const ALL_POSTS = gql`
        query {
            allPosts {
                author
                content
            }
        }  
    `

    const result = useQuery(ALL_POSTS)

    if (result.loading) {
        console.log('loading posts')
    }

    if (result.data) {
        setPosts(result.data.allPosts)
    }

    const posts = useSelector(state => state.posts)

    return (
        <div>
            <ul style={listStyle}>
                {posts.map((post) => <Post post={post} deletePost={deletePost} key={Math.random()} />)}
                <Newpost addPost={addNewPost} postsLength={posts.length} />
            </ul>
        </div>
    )
}

export default Posts