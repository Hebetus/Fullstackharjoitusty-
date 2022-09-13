const Post = ({ post, key }) => {
    const postStyle = {
        borderStyle: 'solid',
        padding: 5
    }

    return (
        <>
            <li key={key}>
                <p style={postStyle}>{post.author}</p>
                <p>{post.content}</p>
            </li>
        </>
    )
}

export default Post