import { useState } from 'react';

const Posts = (props) => {
    const [posts, setPosts] = useState(props.posts)
    const [newPost, setNewPost] = useState("Uusi postaus?")

    const handlePost = (event) => {
        event.preventDefault()
        const newPostJSON = {
            id: posts.length,
            author: "Default",
            content: newPost
        }
        setPosts([...posts, newPostJSON])
        setNewPost("Uusi postaus?")
    }

    const handleChange = (event) => {
        setNewPost(event.target.value)
    }

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