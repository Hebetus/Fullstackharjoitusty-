import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { POST_REPLIES } from '../../graphql/queries'

import Reply from './Reply'
import Newreply from './Newreply'

import { paragraphStyle } from './BoardStyles'

const Replies = ({ id, isLoggedIn }) => {
    const [replies, setReplies] = useState([])

    const { loading, error, data } = useQuery(POST_REPLIES, {
        variables: { postRepliesId: id }
    })

    useEffect(() => {
        if (data) {
            setReplies(data.postReplies)
        }
    }, [loading, data])

    const addReply = (reply) => {
        setReplies([...replies, reply])
    }

    return (
        <div key={Math.random()}>
            {
            replies.length > 0
            ?
            <div>
                {replies.map((reply) => <Reply reply={reply} key={Math.random()} />)}
            </div>
            :
            <p style={paragraphStyle()}>Ei vielä yhtään vastausta</p>
            }
            <Newreply id={id} isLoggedIn={isLoggedIn} addReply={addReply} />
        </div>
    )
}

export default Replies