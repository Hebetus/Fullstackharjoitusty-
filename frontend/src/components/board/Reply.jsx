const Reply = ({ reply }) => {
    const itemsStyle = {
        display: 'flex',
        flexDirection: 'row'
    }

    const dateStyle = {
        textAlign: 'right',
        flexGrow: 2
    }

    return (
        <div style={itemsStyle}>
            <div style={itemsStyle}>
                <p key={Math.random()}>{reply.content}</p>
            </div>
            <div style={dateStyle}>
                <p>{reply.date.substring(0, 21)}</p>
            </div>
        </div>
    )
}

export default Reply