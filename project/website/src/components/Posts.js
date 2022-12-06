import { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { postsChange, removePost, addPost } from '../reducers/postsReducer'

import Post from './Post'
import Newpost from './Newpost'

const Posts = () => {
    const baseUrl = '/api/posts'

    const posts = useSelector(state => state.posts)
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

    useEffect(() => {
        const postsPromise = axios.get(baseUrl)
        postsPromise.then((result) => {
          setPosts(result.data)
        })
      }, []
    )

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