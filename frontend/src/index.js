import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    HttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { Provider } from 'react-redux'
import store from './reducers/store'

import App from './components/App'

const httpLink = new HttpLink({
    uri: "https://apollo-server.fly.dev/"
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>
)