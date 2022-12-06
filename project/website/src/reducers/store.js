import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './loginReducer'
import newpostReducer from './/newpostReducer'
import postsReducer from './/postsReducer'
import userReducer from './userReducer'
import registrationReducer from './registrationReducer'

const store = configureStore({
    reducer: {
        login: loginReducer,
        newpost: newpostReducer,
        posts: postsReducer,
        user: userReducer,
        registration: registrationReducer
    }
})

export default store