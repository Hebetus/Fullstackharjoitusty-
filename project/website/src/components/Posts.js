import { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post'

const Posts = () => {
    const [posts, setPosts] = useState([])

    const listStyle = {
        margin: 0
    }

    useEffect(() => {
        const postsPromise = axios.get('http://localhost:3001/posts')
        console.log(postsPromise)
        postsPromise.then((result) => {
          console.log(result.data)
          setPosts(result.data)
        })
      }, []
    )

    return (
        <>
            <ul style={listStyle}>
                {posts.map((post, i) => <Post post={post} key={i}/>)}
            </ul>
        </>
    )
}

export default Posts