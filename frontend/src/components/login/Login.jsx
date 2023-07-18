import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { usernameChange, passwordChange, loginStatusChange } from '../../reducers/loginReducer'
import { notificationChange,  } from '../../reducers/notificationReducer'

import Logout from './Logout'

const Login = ({ setLoginStatus }) => {
    const appStyle = {
        margin: 5,
        fontFamily: 'monospace',
        fontSize: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }

    const paragraphStyle = {
        textAlign: 'center'
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }

    const navigate = useNavigate()

    const login = useSelector(state => state.login)

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
    const seterrorNotification = () => {
        dispatch(notificationChange({
            text: 'Väärä käyttäjänimi tai salasana :/',
            color: 'red',
            show: true
        }))
    }

    const clearNotification = () => {
        dispatch(notificationChange({
            text: '',
            color: '',
            show: false
        }))
    }

    const handleLogin = (event) => {
        event.preventDefault()
        const userForLogin = {
            username: username,
            password: password
        }
        axios.post(loginUrl, userForLogin)
            .then((response) => {
                const newToken = response.data.token
                window.localStorage.setItem('username', username)
                window.localStorage.setItem('password', password)
                window.localStorage.setItem('token', newToken)
                setUserName('')
                setPassword('')
                console.log(window.localStorage.getItem('username'), window.localStorage.getItem('password'), window.localStorage.getItem('token'))
                dispatch(loginStatusChange(true))
                setLoginStatus(true)
                navigate('/')
            })
            .catch((error) => {
                console.log(error.message)
                seterrorNotification()
                setTimeout((data) => {
                    console.log('test')
                    clearNotification()
                }, 5000)
            })
    }

    const handleUsernameChange = (event) => {
        setUserName(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    if (login.loggedIn) {
        return (
            <Logout />
        )
    }
    
    return (
        <div>
            <div style={appStyle}>
                <form onSubmit={handleLogin} style={formStyle}>
                    <div>
                        <p style={paragraphStyle}>Käyttäjänimi:</p>
                        <input value={username} onChange={handleUsernameChange} style={appStyle}></input>
                    </div>
                    <div>
                        <p style={paragraphStyle}>Salasana:</p>
                        <input value={password} onChange={handlePasswordChange} style={appStyle} type="password"></input>
                    </div>
                    <button type="submit" style={appStyle}>Kirjaudu</button>
                </form>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </div>
    )
}

export default Login