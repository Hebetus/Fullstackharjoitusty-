const userReducer = (state = {
    username: '',
    password: ''
}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.data
        default:
            return state
    }
}

export const userChange = data => {
    return {
        type: 'SET_USER',
        data: data
    }
}

export default userReducer