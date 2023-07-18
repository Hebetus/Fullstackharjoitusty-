import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { removePost } from '../../reducers/postsReducer'

import Replies from './Replies'
import { gql, useMutation } from '@apollo/client'

const Post = ({ post }) => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const [showReplies, setShowReplies] = useState(false)
    const [likes, setLikes] = useState(post.likes || 0)
    const [likesDescription, setLikesDescription] = useState('')

    const appStyle = {
        margin: 5,
        fontFamily: 'monospace',
        fontSize: 16,
        listStyleType: 'none'
    }

    const postStyle = {
        borderBottom: 'solid',
        borderBottomWidth: 2,
        padding: 5
    }

    const itemsStyle = {
        display: 'flex',
        flexDirection: 'row'
    }

    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'monospace'
    }

    const likeStyle = {
        margin: 5,
        backgroundColor: liked ? 'black' : 'white'
    }

    const dislikeStyle = {
        margin: 5,
        backgroundColor: disliked ? 'black' : 'white'
    }

    const repliesStyle = {
        margin: 5,
        backgroundColor: showReplies ? 'black' : 'white'
    }

    const dateStyle = {
        textAlign: 'right',
        flexGrow: 2
    }

    const dispatch = useDispatch()

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(removePost(post._id.toString()))
    }

    const ADD_LIKE = gql`
        mutation IncreaseLikes($id: String!) {
            increaseLikes(id: $id)
        }
    `

    const [mutateLike, { dataLike, loadingLike, errorLike }] = useMutation(ADD_LIKE)

    const handleLike = (event) => {
        event.preventDefault()
        setLiked(!liked)
        setDisliked(false)
        mutateLike({ variables: { id: post._id } })
        setLikes(likes + 1)
    }

    const ADD_DISLIKE = gql`
        mutation DecreaseLikes($id: String!) {
            decreaseLikes(id: $id)
        }
    `

    const [mutateDislike, { dataDislike, loadingDislike, errorDislike }] = useMutation(ADD_DISLIKE)

    const handleDislike = (event) => {
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

    const credentials = useSelector(state => state.login)
    const username = credentials.username

    useEffect(() => {
        if (likes === 1) {
            setLikesDescription('tykkäys')
        }
    
        else {
            setLikesDescription('tykkäystä')
        }
    }, [likes])

    return (
        <li key={post._id} style={appStyle}>
            <p style={postStyle}>Käyttäjän {post.author} postaus {username === post.user ? <button style={buttonStyle} onClick={handleClick}>Poista</button> : null}</p>
            <p>{post.content}</p>
            <div style={itemsStyle}>
                <div style={itemsStyle}>
                    <p>{likes} {likesDescription}</p>
                    <button style={likeStyle} onClick={handleLike}>👍</button>
                    <button style={dislikeStyle} onClick={handleDislike}>👎</button>
                    <button style={repliesStyle} onClick={handleShowReplies}>💬</button>
                </div>
                <div style={dateStyle}>
                    <p>{post.date.substring(0, 21)}</p>
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