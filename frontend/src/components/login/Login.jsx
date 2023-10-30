import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { notificationChange } from '../../reducers/notificationReducer'

import { loginStyle, paragraphStyle, formStyle } from './LoginStyles'

const Login = ({ setLoginStatus }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const loginUrl = '/api/login'

    const dispatch = useDispatch()

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
                const profile = response.data.profile
                window.localStorage.setItem('username', username)
                window.localStorage.setItem('password', password)
                window.localStorage.setItem('token', newToken)

                window.localStorage.setItem('name', profile.name)
                window.localStorage.setItem('userId', profile.userId)
                window.localStorage.setItem('signupDate', profile.signupDate)
                window.localStorage.setItem('profilePic', profile.profilePic)
                window.localStorage.setItem('email', profile.email)
                window.localStorage.setItem('userId', profile.userId)
                
                setUsername('')
                setPassword('')
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
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    
    return (
        <div>
            <div style={loginStyle()}>
                <form onSubmit={handleLogin} style={formStyle()}>
                    <div>
                        <p style={paragraphStyle()}>Käyttäjänimi:</p>
                        <input value={username} onChange={handleUsernameChange} style={loginStyle()}></input>
                    </div>
                    <div>
                        <p style={paragraphStyle()}>Salasana:</p>
                        <input value={password} onChange={handlePasswordChange} style={loginStyle()} type="password"></input>
                    </div>
                    <button type="submit" style={loginStyle()}>Kirjaudu</button>
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