const notificationReducer = (state = {
    text: '',
    color: '',
    show: false
}, action) => {
    switch(action.type) {
        case 'SET_NOTIFICATION':
            return action.data
        case 'CLEAR_NOTIFICATION':
            return {
                text: '',
                color: '',
                show: false
            }
        default:
            return state
    }
}

export const notificationChange = data => {
    return {
        type: 'SET_NOTIFICATION',
        data: data
    }
}

export const clearNotification = data => {
    return {
        type: 'CLEAR_NOTIFICATION',
        data: data
    }
}

export default notificationReducer