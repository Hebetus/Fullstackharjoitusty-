export const notificationStyle = (notification) => {
    return {
        backgroundColor: notification.color,
        padding: 5,
        margin: 0,
        fontFamily: 'monospace',
        fontSize: 16
    }
}

export const appStyle = () => {
    return {
        padding: 10,
        fontFamily: 'monospace',
        fontSize: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    }
}

export const rootStyle = () => {
    return {
        backgroundColor: '#ccccb3'
    }
}