import { useState } from 'react';
import axios from 'axios';

const Newpost = () => {
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

    const newpostStyle = {
        borderStyle: 'solid',
        padding: 5,
        fontFamily: 'monospace'
    }

    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'monospace'
    }

    return (
        <div style={newpostStyle}>
            <form onSubmit={handlePost}>
                <input value={newPost} onChange={handleChange} style={newpostStyle}></input>
                <button type="submit" style={buttonStyle}>Lisää uusi postaus?</button>
            </form>
        </div>
    )
}

export default Newpost