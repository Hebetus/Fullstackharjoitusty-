import { useMutation } from '@apollo/client'

import { ADD_POST } from '../../graphql/mutations'

import { newpostStyle, formStyle, submitbuttonStyle } from './BoardStyles'
import { useState } from 'react'

const Newpost = ({ addPost, postsLength }) => {
    const [newPost, setNewPost] = useState('')

    const [mutate] = useMutation(ADD_POST)

    const handlePost = (event) => {
        event.preventDefault()
        let username = window.localStorage.getItem('username')
        if (!username) {
            username = 'Anonyymi'
        }
        const newPostJSON = {
            author: username,
            content: newPost,
            id: postsLength,
            date: new Date()
        }
        addPost(newPostJSON)
        mutate({ variables: { content: newPost, author: username } })
        setNewPost("Uusi postaus?")
    }

    const handleChange = (event) => {
        setNewPost(event.target.value)
    }

    return (
        <div style={newpostStyle()}>
            <form onSubmit={handlePost} style={formStyle()}>
                <textarea value={newPost} onChange={handleChange} style={newpostStyle()}></textarea>
                <button type="submit" style={submitbuttonStyle()}>Lisää uusi postaus</button>
            </form>
        </div>
    )
}

export default Newpost