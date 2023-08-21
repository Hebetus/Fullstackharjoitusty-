import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'

import Replies from './Replies'

import { ADD_LIKE, ADD_DISLIKE } from '../../graphql/mutations'

import profilePic from '../../images/anon-profile-pic.jpg'

import {
    postcontainerStyle, postStyle, flexStyle,
    profilepicStyle, itemsStyle,
    favoriteStyle, likeStyle, dislikeStyle,
    repliesStyle, dateStyle, closedialogStyle
} from './BoardStyles'

const Post = ({ post, isLoggedIn }) => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const [showReplies, setShowReplies] = useState(false)
    const [likes, setLikes] = useState(post.likes || 0)
    const [likesDescription, setLikesDescription] = useState('')
    const [favorite, setFavorited] = useState(false)

    const [mutateLike] = useMutation(ADD_LIKE)

    const handleLike = (event) => {
        if (liked) {
            return
        }
        if (!isLoggedIn) {
            showDialog()
            return
        }
        event.preventDefault()
        setLiked(!liked)
        setDisliked(false)
        mutateLike({ variables: { id: post._id } })
        setLikes(likes + 1)
    }

    const [mutateDislike] = useMutation(ADD_DISLIKE)

    const handleDislike = (event) => {
        if (disliked) {
            return
        }
        if (!isLoggedIn) {
            showDialog()
            return
        }
        event.preventDefault()
        setDisliked(!disliked)
        setLiked(false)
        mutateDislike({ variables: { id: post._id } })
        setLikes(likes - 1)
    }

    const handleShowReplies = (event) => {
        event.preventDefault()
        setShowReplies(!showReplies)
    }

    const handleFavorite = (event) => {
        if (!isLoggedIn) {
            showDialog()
            return
        }
        setFavorited(!favorite)
    }

    const showDialog = () => {
        const loginDialog = document.getElementById('loginDialog')
        loginDialog.showModal()
    }

    const closeDialog = (event) => {
        event.preventDefault()
        const loginDialog = document.getElementById('loginDialog')
        loginDialog.close()
    }

    useEffect(() => {
        if (likes === 1) {
            setLikesDescription('tykkäys')
        }
    
        else {
            setLikesDescription('tykkäystä')
        }
    }, [likes])

    return (
        <li key={post._id} style={postcontainerStyle()}>
            <dialog id='loginDialog'>
                <p>Kirjaudu sisään tykätäksesi/merkataksesi postauksia</p>
                <button style={closedialogStyle()} onClick={closeDialog}>
                    X
                </button>
            </dialog>
            <div style={flexStyle()}>
                <img src={profilePic} alt='Anonymous profile pic' width='70' height='70' style={profilepicStyle()}/>
                <div>
                    <p style={postStyle()}>Käyttäjän {post.author} postaus</p>
                </div>
            </div>
            <p>{post.content}</p>
            <div style={itemsStyle()}>
                <div style={itemsStyle()}>
                    <p>{likes} {likesDescription}</p>
                    <button style={likeStyle(liked)} onClick={handleLike}>👍</button>
                    <button style={dislikeStyle(disliked)} onClick={handleDislike}>👎</button>
                    <button style={repliesStyle(showReplies)} onClick={handleShowReplies}>💬</button>
                    <button style={favoriteStyle(favorite)} onClick={handleFavorite}>⭐</button>
                </div>
                <div style={dateStyle()}>
                    <p>{String(post.date).substring(0, 21)}</p>
                </div>
            </div>
            {
            showReplies
            ?
            <Replies replies={post.replies} _id={post._id} />
            :
            null
            }
        </li>
    )
}

export default Post