import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    registrationStyle, paragraphStyle, formStyle,
    nameinputStyle, emailinputStyle, usernameinputStyle,
    passwordinputStyle, errorStyle
} from './RegistrationStyles'

const Registration = ({ setLoginStatus }) => {
    const [nameValid, setNameValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [usernameValid, setUsernameValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)

    const registrationUrl = '/api/users'
    const loginUrl = '/api/login'

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

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
                setLoginStatus(true)
                navigate('/')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div style={registrationStyle()}>
                <form onSubmit={handleRegistration} style={formStyle()}>
                    <div style={formStyle()}>
                        <p style={paragraphStyle()}>Nimi: </p>
                        <input value={name} onChange={handleNameChange} style={nameinputStyle(nameValid)}></input>
                        {nameValid ? null : <p style={errorStyle()}>Nimen tulee olla 3-15 merkin pituinen</p>}
                    </div>
                    <div style={formStyle()}>
                        <p style={paragraphStyle()}>Sähköposti: </p>
                        <input type="email" value={email} onChange={handleEmailChange} style={emailinputStyle(emailValid)}></input>
                        {emailValid ? null : <p style={errorStyle()}>Syötä kelvollinen sähköpostiosoite</p>}
                    </div>
                    <div style={formStyle()}>
                        <p style={paragraphStyle()}>Käyttäjänimi: </p>
                        <input value={username} onChange={handleUsernameChange} style={usernameinputStyle(usernameValid)}></input>
                        {usernameValid ? null : <p style={errorStyle()}>Käyttäjänimen tulee olla 3-15 merkin pituinen</p>}
                    </div>
                    <div style={formStyle()}>
                        <p style={paragraphStyle()}>Salasana: </p>
                        <input type="password" value={password} onChange={handlePasswordChange} style={passwordinputStyle(passwordValid)}></input>
                        {passwordValid ? null : <p style={errorStyle()}>Salasanan tulee olla 4-15 merkin pituinen</p>}
                    </div>
                    <button type="submit" style={registrationStyle()}>Rekisteröidy</button>
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