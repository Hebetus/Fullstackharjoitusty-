import { useState, useEffect } from 'react'

import { likeStyle } from '../BoardStyles'

const Likebutton = ({ postLikes, isLoggedIn }) => {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(postLikes || 0)

    const handleLike = (event) => {
        if (liked) {
            mutateRemoveVote({ variables: { userId: userId, postId: id } })
            setLiked(false)
            setLikes(likes - 1)
            return
        }
        if (!isLoggedIn) {
            showDialog()
            return
        }
        if (disliked) {
            mutateRemoveVote({ variables: { userId: userId, postId: id } })
            setDisliked(false)
        }
        event.preventDefault()
        mutateVote({ variables: { userId: userId, postId: id, like: true } })
        setLiked(true)
        setLikes(likes + 1)
    }

    return (
        <button
        style={likeStyle(liked)}
        onClick={handleLike}>
            👍
        </button>
    )
}

export default Likebutton