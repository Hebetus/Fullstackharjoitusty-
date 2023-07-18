import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

const Newreply = ({ _id, addReply }) => {
    const [reply, setReply] = useState('')

    const ADD_REPLY = gql`
        mutation AddReply($addReplyId: String!, $reply: String!) {
            addReply(id: $addReplyId, reply: $reply)
        }
    `

    const [mutate, { data, error, loading }] = useMutation(ADD_REPLY)

    const handleSubmit = (event) => {
        event.preventDefault()
        const newReply = {
            author: '',
            content: reply,
            date: '',
            likes: 0
        }
        addReply(newReply)
        mutate({ variables: { addReplyId: _id, reply: reply } })
        setReply('')
    }

    const handleChange = (event) => {
        setReply(event.target.value)
    }

    const replyStyle = {
        borderStyle: 'solid',
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
        <div>
            <form onSubmit={handleSubmit}>
                <input value={reply} onChange={handleChange} style={replyStyle}></input>
                <button type="submit" style={buttonStyle}>Vastaa</button>
            </form>
        </div>
    )
}

export default Newreply