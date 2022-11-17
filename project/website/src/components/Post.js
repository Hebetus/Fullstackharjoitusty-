import { useDispatch } from 'react-redux'
import { removePost } from '../reducers/postsReducer'

const Post = ({ post, deletePost }) => {
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

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(removePost(post._id.toString()))
    }

    return (
        <li key={post._id}>
            <p style={postStyle}>{post.author} <button style={buttonStyle} onClick={handleClick}>Poista</button></p>
            <p>{post.content}</p>
        </li>
    )
}

export default Post