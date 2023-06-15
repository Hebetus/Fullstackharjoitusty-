const registrationReducer = (state = {
    name: '',
    email: '',
    username: '',
    password: ''
},
action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name: action.data}
        case 'SET_EMAIL':
            return {...state, email: action.data}
        case 'SET_USERNAME':
            return {...state, username: action.data}
        case 'SET_PASSWORD':
            return {...state, password: action.data}
        default:
            return state
    }
}

export const nameChange = data => {
    return {
        type: 'SET_NAME',
        data: data
    }
}
 
export const emailChange = data => {
    return {
        type: 'SET_EMAIL',
        data: data,
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

export default registrationReducer