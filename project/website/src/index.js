import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './components/App'

import loginReducer from './reducers/loginReducer'
import newpostReducer from './reducers/newpostReducer'
import postsReducer from './reducers/postsReducer'
import userReducer from './reducers/userReducer'

const store = configureStore({
    reducer: {
        login: loginReducer,
        newpost: newpostReducer,
        posts: postsReducer,
        user: userReducer
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);