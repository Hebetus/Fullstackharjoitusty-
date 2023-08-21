import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ADD_REPLY } from '../../graphql/mutations'

import { boxStyle, replyStyle, replybuttonStyle } from './BoardStyles'

const Newreply = ({ _id, addReply }) => {
    const [reply, setReply] = useState('')

    const [mutate] = useMutation(ADD_REPLY)

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

    return (
        <div style={boxStyle()}>
            <form onSubmit={handleSubmit}>
                <input value={reply} onChange={handleChange} style={replyStyle()}></input>
                <button type="submit" style={replybuttonStyle()}>Vastaa</button>
            </form>
        </div>
    )
}

export default Newreply