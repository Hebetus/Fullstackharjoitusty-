const loginReducer = (state = {
    username: '',
    password: ''
},
action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {...state, username: action.data}
        case 'SET_PASSWORD':
            return {...state, password: action.data}
        default:
            return state
    }
}

export const usernameChange = data => {
    return {
        type: 'SET_USERNAME',
        data: data
    }
}

export const passwordChange = data => {
    return {
        type: 'SET_PASSWORD',
        data: data
    }
}

export default loginReducer