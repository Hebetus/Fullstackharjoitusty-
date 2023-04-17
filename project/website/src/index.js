import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './reducers/store'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
} from '@apollo/client'

import App from './components/App'

const client = new ApolloClient({
    uri: 'https://apollo-server.fly.dev/',
    cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>
)