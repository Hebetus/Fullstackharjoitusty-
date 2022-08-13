import { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState("Uusi postaus?")

    const handlePost = (event) => {
        event.preventDefault()
        const newPostJSON = {
            author: "Default",
            content: newPost
        }
        axios.post('http://localhost:3001/posts', newPostJSON).then((result) => {
            console.log(result)
            setPosts(posts.concat(result.data))
        })
        setNewPost("Uusi postaus?")
    }

    const handleChange = (event) => {
        setNewPost(event.target.value)
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
            <ul>
                {posts.map((post, i) => <li key={i}>{post.content}</li>)}
            </ul>
            <form onSubmit={handlePost}>
                <input value={newPost} onChange={handleChange}></input>
                <button type="submit">Submit new post</button>
            </form>
        </>
    )
}

export default Posts 