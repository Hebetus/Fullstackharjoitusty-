import { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post'
import Newpost from './Newpost'

const Posts = () => {
    const [posts, setPosts] = useState([])

    const listStyle = {
        margin: 0
    }

    useEffect(() => {
        const postsPromise = axios.get('http://localhost:3001/api/posts/')
        postsPromise.then((result) => {
          setPosts(result.data)
        })
      }, []
    )

    const deletePost = (id) => {
        const newPosts = [...posts]
        const newPostsFiltered = newPosts.filter(post => post.id !== id)
        setPosts(newPostsFiltered)
    }

    const addPost = (newPost) => {
        const newPosts = [...posts]
        newPosts.push(newPost)
        setPosts(newPosts)
    }

    return (
        <>
            <ul style={listStyle}>
                {posts.map((post) => <Post post={post} deletePost={deletePost}/>)}
                <Newpost addPost={addPost} postsLength={posts.length}/>
            </ul>
        </>
    )
}

export default Posts