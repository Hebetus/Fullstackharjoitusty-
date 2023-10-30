import { useEffect, useState } from 'react'

import { itemsStyle, dateStyle, removebuttonStyle } from './BoardStyles'

const Reply = ({ reply }) => {
    const [ownPost, setOwnPost] = useState(false)

    const userId = parseInt(window.localStorage.getItem('userId'))

    useEffect(() => {
        if (reply.userId === userId) {
            setOwnPost(true)
        }
    }, [reply.userId, userId])

    return (
        <div style={itemsStyle()}>
            <div style={itemsStyle()}>
                <p key={Math.random()}>{reply.content}</p>
            </div>
            <div style={dateStyle()}>
                <p>{reply.date}</p>
            </div>
            <div>
            {
            ownPost
            ?
            <button style={removebuttonStyle()}>Poista</button>
            :
            null
            }
            </div>
        </div>
    )
}

export default Reply