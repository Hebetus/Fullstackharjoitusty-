import { useEffect, useState } from 'react'

import Reply from './Reply'
import Newreply from './Newreply'

import { paragraphStyle } from './BoardStyles'

const Replies = ({ replies, _id }) => {
    const [realReplies, setReplies] = useState([])

    if (!replies) {
        replies = []
    }

    useEffect(() => {
        setReplies(replies)
    }, [replies])

    const addReply = (reply) => {
        setReplies(realReplies.concat(reply))
    }

    return (
        <div key={Math.random()}>
            {
            realReplies.length
            ?
            <div>
                {realReplies.map((reply) => <Reply reply={reply} key={Math.random()} />)}
            </div>
            :
            <p style={paragraphStyle()}>Ei vielä yhtään vastausta</p>
            }
            <Newreply _id={_id} addReply={addReply} />
        </div>
    )
}

export default Replies