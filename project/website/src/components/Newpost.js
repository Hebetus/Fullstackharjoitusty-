import { useState } from 'react';
import axios from 'axios';

const Newpost = ({ addPost, postsLength }) => {
    const baseUrl = '/api/posts'
    const [newPost, setNewPost] = useState("Uusi postaus?")

    const handlePost = (event) => {
        event.preventDefault()
        const newPostJSON = {
            author: "Default",
            content: newPost,
            id: postsLength
        }
        axios.post(baseUrl, newPostJSON).then((result) => {
            console.log(result)
        })
        addPost(newPostJSON)
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

    const formStyle = {
        padding: 5,
        fontFamily: 'monospace'
    }

    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'monospace',
        position: 'absolute',
        right: 20
    }

    return (
        <li style={newpostStyle}>
            <form onSubmit={handlePost} style={formStyle}>
                <input value={newPost} onChange={handleChange} style={newpostStyle}></input>
                <button type="submit" style={buttonStyle}>Lisää uusi postaus?</button>
            </form>
        </li>
    )
}

export default Newpost