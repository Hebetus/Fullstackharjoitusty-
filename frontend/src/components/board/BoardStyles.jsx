export const listStyle = () => {
    return {
        margin: 0
    }
}

export const newpostStyle = () => {
    return {
        listStyleType: 'none',
        padding: 5,
        fontFamily: 'monospace',
        flexGrow: 2
    }
}

export const formStyle = () => {
    return {
        fontFamily: 'monospace',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7
    }
}

export const submitbuttonStyle = () => {
    return {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'monospace'
    }
}

export const boxStyle = () => {
    return {
        margin: 5
    }
}

export const replyStyle = () => {
    return {
        borderStyle: 'solid',
        padding: 5,
        fontFamily: 'monospace'
    }
}

export const replybuttonStyle = () => {
    return {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'monospace',
        position: 'absolute',
        right: 20
    }
}

export const postcontainerStyle = () => {
    return {
        margin: 5,
        fontFamily: 'monospace',
        fontSize: 16,
        listStyleType: 'none',
        borderBottom: 'solid',
        borderBottomWidth: 4
    }
}

export const postStyle = () => {
    return {
        margin: 5
    }
}

export const flexStyle = () => {
    return {
        display: 'flex',
        flexDirection: 'column',
        borderBottom: 'solid',
        borderBottomWidth: 2
    }
}

export const profilepicStyle = () => {
    return {
        borderRadius: 50,
        margin: 5
    }
}

export const itemsStyle = () => {
    return {
        display: 'flex',
        flexDirection: 'row'
    }
}

export const deletebuttonStyle = () => {
    return {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'monospace'
    }
}

export const favoriteStyle = (favorite) => {
    return {
        margin: 5,
        backgroundColor: favorite ? 'black' : 'white'
    }
}

export const likeStyle = (liked) => {
    return {
        margin: 5,
        backgroundColor: liked ? 'black' : 'white'
    }
}

export const dislikeStyle = (disliked) => {
    return {
        margin: 5,
        backgroundColor: disliked ? 'black' : 'white'
    }
}

export const repliesStyle = (showReplies) => {
    return {
        margin: 5,
        backgroundColor: showReplies ? 'black' : 'white'
    }
}

export const dateStyle = () => {
    return {
        textAlign: 'right',
        flexGrow: 2
    }
}

export const closedialogStyle = () => {
    return {
        position: 'absolute',
        top: 5,
        right: 5,
        border: 'solid',
        borderWidth: 2,
        borderRadius: 5
    }
}

export const postsStyle = () => {
    return {
        margin: 0
    }
}

export const titleStyle = () => {
    return {
        fontSize: 150,
        fontFamily: 'monospace',
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: 7,
        padding: 10,
        margin: 10
    }
}

export const containerStyle = () => {
    return {
        display: 'flex',
        flexDirection: 'row'
    }
}

export const contentStyle = () => {
    return {
        flexGrow: 2
    }
}

export const tabStyle = () => {
    return {
        backgroundColor: 'white',
        fontFamily: 'monospace',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
}

export const tabtitleStyle = () => {
    return {
        margin: 7,
        fontSize: 20
    }
}

export const linkStyle = () => {
    return {
        textAlign: 'center',
        fontSize: 17,
        margin: 3
    }
}

export const paragraphStyle = () => {
    return {
        fontStyle: 'italic'
    }
}