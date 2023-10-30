import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'

import Replies from '../Replies'

import { VOTE, REMOVE_VOTE, FAVORITE, REMOVE_FAVORITE } from '../../../graphql/mutations'
import { POST_LIKES, IS_FAVORITE, HAS_VOTED, USER_PROFILE } from '../../../graphql/queries'

import profilePic from '../../../images/anon-profile-pic.jpg'

import {
    postcontainerStyle, postStyle, flexStyle,
    profilepicStyle, itemsStyle,
    favoriteStyle, likeStyle, dislikeStyle,
    repliesStyle, dateStyle, closedialogStyle,
    removepostcontainerStyle, removebuttonStyle
} from '../BoardStyles'

const Post = ({ post, isLoggedIn }) => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const [showReplies, setShowReplies] = useState(false)
    const [likes, setLikes] = useState(post.likes || 0)
    const [likesDescription, setLikesDescription] = useState('')
    const [favorite, setFavorited] = useState(false)
    const [username, setUsername] = useState('Anonyymi')
    const [ownPost, setOwnPost] = useState(false)
    const {onRemoveButton, setOnRemoveButton} = useState(false)

    const id = parseInt(post.id)
    const userId = parseInt(window.localStorage.getItem('userId'))

    useEffect(() => {
        if (post.userId === userId) {
            setOwnPost(true)
        }
    }, [post.userId, userId])

    const { loading: favoriteLoading, error: favoriteError, data: favoriteData } = useQuery(IS_FAVORITE, {
        variables: { userId: userId, postId: id  }
    })
    useEffect(() => {
        if (favoriteData) {
            if (favoriteData.isFavorite) {
                setFavorited(true)
            }
        }
    }, [favoriteLoading, favoriteData])

    const { loading, error, data } = useQuery(POST_LIKES, {
        variables: { postLikesId: id }
    })
    useEffect(() => {
        if (data) {
            setLikes(data.postLikes)
        }
    }, [loading, data])

    const { loading: votedLoading, error: votedError, data: votedData } = useQuery(HAS_VOTED, {
        variables: { userId: userId, postId: id }
    })
    useEffect(() => {
        if (votedData) {
            if (votedData.vote.upvote) {
                setLiked(true)
            }
            else if (votedData.vote.downvote) {
                setDisliked(true)
            }
        }
    }, [votedLoading, votedData])

    const { loading: userLoading, error: userError, data: userData } = useQuery(USER_PROFILE, {
        variables: { userProfileId: post.userId }
    })
    useEffect(() => {
        if (userData) {
            setUsername(userData.userProfile.username)
        }
    }, [userLoading, userData])

    const [mutateVote] = useMutation(VOTE)
    const [mutateRemoveVote] = useMutation(REMOVE_VOTE)

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

    const handleDislike = (event) => {
        if (disliked) {
            mutateRemoveVote({ variables: { userId: userId, postId: id } })
            setDisliked(false)
            return
        }
        if (!isLoggedIn) {
            showDialog()
            return
        }
        if (liked) {
            mutateRemoveVote({ variables: { userId: userId, postId: id } })
            setLiked(false)
        }
        event.preventDefault()
        mutateVote({ variables: { userId: userId, postId: id, like: false } })
        setDisliked(true)
        setLikes(likes - 1)
    }

    const handleShowReplies = (event) => {
        event.preventDefault()
        setShowReplies(!showReplies)
    }

    const [mutateFavorite] = useMutation(FAVORITE)
    const [mutateRemoveFavorite] = useMutation(REMOVE_FAVORITE)

    const handleFavorite = (event) => {
        if (!isLoggedIn) {
            showDialog()
            return
        }
        if (!favorite) {
            mutateFavorite({ variables: { userId: parseInt(window.localStorage.getItem('userId')), postId: parseInt(post.id) } })
        }
        else {
            mutateRemoveFavorite({ variables: { userId: parseInt(window.localStorage.getItem('userId')), postId: parseInt(post.id) } })
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

    const handleMouseEnterRemoveButton = (event) => {
        event.preventDefault()
        console.log('on')
        setOnRemoveButton(true)
    }

    const handleMouseLeaveRemoveButton = (event) => {
        event.preventDefault()
        setOnRemoveButton(false)
    }

    return (
        <li key={post.id} style={postcontainerStyle()}>
            <dialog id='loginDialog'>
                <p>Kirjaudu sisään tykätäksesi/merkataksesi postauksia</p>
                <button style={closedialogStyle()} onClick={closeDialog}>
                    X
                </button>
            </dialog>
            <div style={flexStyle()}>
                <div style={removepostcontainerStyle()}>
                    <img src={profilePic} alt='Anonymous profile pic' width='70' height='70' style={profilepicStyle()}/>
                    {
                    ownPost
                    ?
                    <div>
                        <button style={removebuttonStyle()}>Poista</button>
                    </div>
                    :
                    null
                    }
                </div>
                <div>
                    <p style={postStyle()}>Käyttäjän {username} postaus</p>
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
                    <p>{String(post.postedAt)}</p>
                </div>
            </div>
            {
            showReplies
            ?
            <Replies id={id} isLoggedIn={isLoggedIn} />
            :
            null
            }
        </li>
    )
}

export default Post