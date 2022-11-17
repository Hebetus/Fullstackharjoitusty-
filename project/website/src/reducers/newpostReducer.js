const newpostReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_POST':
            return action.data
        default:
            return state
    }
}

export const postChange = data => {
    return {
        type: 'SET_POST',
        data: data
    }
}

export default newpostReducer