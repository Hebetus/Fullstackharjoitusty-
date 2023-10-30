import { useMutation } from '@apollo/client'

import { POST } from '../../../graphql/mutations'

import { newpostStyle, formStyle, submitbuttonStyle } from '../BoardStyles'
import { useState } from 'react'

const Newpost = ({ addPost, postsLength }) => {
    const [newPost, setNewPost] = useState('')

    const [mutate] = useMutation(POST)

    const handlePost = (event) => {
        event.preventDefault()
        const username = window.localStorage.getItem('username')
        const userId = parseInt(window.localStorage.getItem('userId'))

        const newPostJSON = {
            author: username,
            content: newPost,
            id: postsLength,
            date: new Date()
        }
        addPost(newPostJSON)
        mutate({ variables: { userId: userId || 4, content: newPost } })
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