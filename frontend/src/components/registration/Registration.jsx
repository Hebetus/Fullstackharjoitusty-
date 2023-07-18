import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { nameChange, emailChange, usernameChange, passwordChange } from '../../reducers/registrationReducer'
import { loginStatusChange } from '../../reducers/loginReducer'

const Registration = ({ setLoginStatus }) => {
    const [nameValid, setNameValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [usernameValid, setUsernameValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)

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

    const nameInputStyle = {
        borderColor: nameValid ? null : 'red',
        alignContent: 'center'
    }

    const emailInputStyle = {
        borderColor: emailValid ? null : 'red'
    }

    const usernameInputStyle = {
        borderColor: usernameValid ? null : 'red'
    }

    const passwordInputStyle = {
        borderColor: passwordValid ? null : 'red'
    }

    const errorStyle = {
        color: 'red',
        fontSize: 14,
        textAlign: 'center'
    }

    const registrationUrl = '/api/users'
    const loginUrl = '/api/login'

    const credentials = useSelector(state => state.registration)
    const name = credentials.name
    const email = credentials.email
    const username = credentials.username
    const password = credentials.password

    const dispatch = useDispatch()
    
    const setName = (name) => {
        dispatch(nameChange(name))
    }

    const setEmail = (email) => {
        dispatch(emailChange(email))
    }

    const setUserName = (username) => {
        dispatch(usernameChange(username))
    }

    const setPassword = (password) => {
        dispatch(passwordChange(password))
    }

    const navigate = useNavigate()

    const handleNameChange = (event) => {
        if (event.target.value.length < 3 || event.target.value.length > 15) {
            setNameValid(false)
        }
        else {
            setNameValid(true)
        }
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        if (event.target.value.indexOf('@') === -1) {
            setEmailValid(false)
        }
        else {
            setEmailValid(true)
        }
        setEmail(event.target.value)
    }

    const handleUsernameChange = (event) => {
        if (event.target.value.length < 3 || event.target.value.length > 15) {
            setUsernameValid(false)
        }
        else {
            setUsernameValid(true)
        }
        setUserName(event.target.value)
    }

    const handlePasswordChange = (event) => {
        if (event.target.value.length < 4 || event.target.value.length > 15) {
            setPasswordValid(false)
        }
        else {
            setPasswordValid(true)
        }
        setPassword(event.target.value)
    }

    const handleRegistration = (event) => {
        event.preventDefault()
        const userForRegistration = {
            name: name,
            email: email,
            username: username,
            password: password
        }
        axios.post(registrationUrl, userForRegistration).then((response) => {
            console.log(response)
        })
        const userForLogin = {
            username: username,
            password: password
        }
        setName('')
        setEmail('')
        setUserName('')
        setPassword('')
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
            })
    }

    return (
        <div>
            <div style={appStyle}>
                <form onSubmit={handleRegistration} style={formStyle}>
                    <div style={formStyle}>
                        <p style={paragraphStyle}>Nimi: </p>
                        <input value={name} onChange={handleNameChange} style={nameInputStyle}></input>
                        {nameValid ? null : <p style={errorStyle}>Nimen tulee olla 3-15 merkin pituinen</p>}
                    </div>
                    <div style={formStyle}>
                        <p style={paragraphStyle}>Sähköposti: </p>
                        <input type="email" value={email} onChange={handleEmailChange} style={emailInputStyle}></input>
                        {emailValid ? null : <p style={errorStyle}>Syötä kelvollinen sähköpostiosoite</p>}
                    </div>
                    <div style={formStyle}>
                        <p style={paragraphStyle}>Käyttäjänimi: </p>
                        <input value={username} onChange={handleUsernameChange} style={usernameInputStyle}></input>
                        {usernameValid ? null : <p style={errorStyle}>Käyttäjänimen tulee olla 3-15 merkin pituinen</p>}
                    </div>
                    <div style={formStyle}>
                        <p style={paragraphStyle}>Salasana: </p>
                        <input type="password" value={password} onChange={handlePasswordChange} style={passwordInputStyle}></input>
                        {passwordValid ? null : <p style={errorStyle}>Salasanan tulee olla 4-15 merkin pituinen</p>}
                    </div>
                    <button type="submit" style={appStyle}>Rekisteröidy</button>
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

export default Registration