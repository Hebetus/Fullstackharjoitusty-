import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import { usernameChange, passwordChange } from '../reducers/loginReducer'
import { userChange } from '../reducers/userReducer'

const Login = () => {
    const appStyle = {
        margin: 5,
        fontFamily: 'monospace',
        fontSize: 16
    }

    const user = useSelector(state => state.user)

    const loginUrl = '/api/login'

    const credentials = useSelector(state => state.login)
    const username = credentials.username
    const password = credentials.password
    
    const dispatch = useDispatch()
    const setUserName = (username) => {
        dispatch(usernameChange(username))
    }
    const setPassword = (password) => {
        dispatch(passwordChange(password))
    }

    const handleLogin = (event) => {
        event.preventDefault()
        const userForLogin = {
            username: username,
            password: password
        }
        axios.post(loginUrl, userForLogin).then((response) => {
            const newToken = response.data.token
            window.localStorage.setItem('username', username)
            window.localStorage.setItem('password', password)
            window.localStorage.setItem('token', newToken)
            setUserName('')
            setPassword('')
            console.log(window.localStorage.getItem('username'), window.localStorage.getItem('password'), window.localStorage.getItem('token'))
        })
    }

    const handleUsernameChange = (event) => {
        setUserName(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleLogout = (event) => {
        event.preventDefault()
        dispatch(userChange({}))
    }
    
    return (
        <div style={appStyle}>
            <form onSubmit={handleLogin}>
                <div>
                    <p>Käyttäjänimi:</p>
                    <input value={username} onChange={handleUsernameChange} style={appStyle}></input>
                </div>
                <div>
                    <p>Salasana:</p>
                    <input value={password} onChange={handlePasswordChange} style={appStyle}></input>
                </div>
                <button type="submit" style={appStyle}>Kirjaudu</button>
            </form>
        </div>
    )
}

export default Login