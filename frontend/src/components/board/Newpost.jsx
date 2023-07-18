import { useSelector, useDispatch } from 'react-redux'
import { gql, useMutation } from '@apollo/client'

import { postChange } from '../../reducers/newpostReducer'

const Newpost = ({ addPost, postsLength }) => {
    const ADD_POST = gql`
        mutation AddPost($content: String!, $author: String!) {
            addPost(content: $content, author: $author)
        }
    `

    const [mutate, { data, error, loading }] = useMutation(ADD_POST)

    const newPost = useSelector(state => state.newpost)

    const dispatch = useDispatch()
    const setNewPost = (newPost) => {
        dispatch(postChange(newPost))
    }

    const handlePost = (event) => {
        event.preventDefault()
        let username = window.localStorage.getItem('username')
        if (!username) {
            username = 'Anonyymi'
            console.log(username)
        }
        const newPostJSON = {
            author: username,
            content: newPost,
            id: postsLength
        }
        addPost(newPostJSON)
        mutate({ variables: { content: newPost, author: username } })
        setNewPost("Uusi postaus?")
    }

    const handleChange = (event) => {
        setNewPost(event.target.value)
    }

    const newpostStyle = {
        listStyleType: 'none',
        padding: 5,
        fontFamily: 'monospace'
    }

    const formStyle = {
        fontFamily: 'monospace',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'monospace',
        
    }

    return (
        <div style={newpostStyle}>
            <form onSubmit={handlePost} style={formStyle}>
                <input value={newPost} onChange={handleChange} style={newpostStyle}></input>
                <button type="submit" style={buttonStyle}>Lisää uusi postaus</button>
            </form>
        </div>
    )
}

export default Newpost