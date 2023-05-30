import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { removePost } from '../reducers/postsReducer'

const Post = ({ post }) => {
    const [liked, setLiked] = useState(false)

    const appStyle = {
        margin: 5,
        fontFamily: 'monospace',
        fontSize: 16
    }

    const dispatch = useDispatch()

    const postStyle = {
        borderStyle: 'solid',
        padding: 5
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

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(removePost(post._id.toString()))
    }

    const handleLike = (event) => {
        event.preventDefault()
        setLiked(!liked)
    }

    return (
        <li key={post._id} style={appStyle}>
            <p style={postStyle}>{post.author} <button style={buttonStyle} onClick={handleClick}>Poista</button><button style={likeStyle} onClick={handleLike}>👍</button></p>
            <p>{post.content}</p>
        </li>
    )
}

export default Post