const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return action.data
        case 'REMOVE_POST':
            const newPosts = state.filter(post => {
                if (post._id.toString() !== action.data) {
                    return post
                }
                return null
            })
            return newPosts
        case 'ADD_POST':
            return [...state, action.data]
        default:
            return state
    }
}

export const postsChange = data => {
    return {
        type: 'SET_POSTS',
        data: data
    }
}

export const removePost = data => {
    return {
        type: 'REMOVE_POST',
        data: data
    }
}

export const addPost = data => {
    return {
        type: 'ADD_POST',
        data: data
    }
}

export default postsReducer