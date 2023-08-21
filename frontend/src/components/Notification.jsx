import { useSelector } from 'react-redux'

import { notificationStyle } from './AppStyles'

const Notification = () => {
    const notification = useSelector(state => state.notification)

    if (!notification.show) {
        return null
    }

    return (
        <div style={notificationStyle(notification)}>
            <p>{notification.text}</p>
        </div>
    )
}

export default Notification