const Post = ({ post, deletePost }) => {
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
        deletePost(post.id)
    }

    return (
        <>
            <li key={post.id}>
                <p style={postStyle}>{post.author} <button style={buttonStyle} onClick={handleClick}>Poista</button></p>
                <p>{post.content}</p>
            </li>
        </>
    )
}

export default Post