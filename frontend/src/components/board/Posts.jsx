import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postsChange, removePost, addPost } from '../../reducers/postsReducer'
import { gql, useQuery } from '@apollo/client'

import Post from './Post'
import Newpost from './Newpost'

const Posts = () => {
    const [postsStatus, setPostsStatus] = useState([])
    const [realPosts, setRealPosts] = useState([])

    const dispatch = useDispatch()
    const setPosts = (content) => {
        dispatch(postsChange(content))
    }
    const deletePost = (id) => {
        dispatch(removePost(id))
    }
    const addNewPost = (newPost) => {
        console.log(newPost)
        dispatch(addPost(newPost))
        setPostsStatus(postsStatus.concat(newPost))
        setRealPosts(realPosts.concat(newPost))

        if (result.loading) {
            console.log('loading posts')
        }

        if (result.data) {
            setPosts(result.data.allPosts)
        }
    }

    const listStyle = {
        margin: 0
    }

    const ALL_POSTS = gql`
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

    const result = useQuery(ALL_POSTS)

    if (result.loading) {
        console.log('loading posts')
    }

    if (result.data) {
        setPosts(result.data.allPosts)
    }

    const posts = useSelector(state => state.posts)

    useEffect(() => {
        if (result.data) {
            setRealPosts(result.data.allPosts)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result.loading])

    return (
        <div>
            <ul style={listStyle} id='postsList'>
                {realPosts.map((post) => <Post post={post} deletePost={deletePost} key={Math.random()} />)}
                <Newpost addPost={addNewPost} postsLength={posts.length} />
            </ul>
        </div>
    )
}

export default Posts