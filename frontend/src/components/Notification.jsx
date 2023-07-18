import { useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector(state => state.notification)

    const notificationStyle = {
        backgroundColor: notification.color,
        padding: 5,
        margin: 0,
        fontFamily: 'monospace',
        fontSize: 16
    }

    if (!notification.show) {
        return null
    }

    return (
        <div style={notificationStyle}>
            <p>{notification.text}</p>
        </div>
    )
}

export default Notification