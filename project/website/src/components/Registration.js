import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { emailChange, usernameChange, passwordChange } from '../reducers/registrationReducer'

const Registration = () => {
    const appStyle = {
        margin: 5,
        fontFamily: 'monospace',
        fontSize: 16
    }

    const registrationUrl = '/api/users'

    const credentials = useSelector(state => state.registration)
    const email = credentials.email
    const username = credentials.username
    const password = credentials.password

    const dispatch = useDispatch()
    const setEmail = (email) => {
        dispatch(emailChange(email))
    }
    const setUserName = (username) => {
        dispatch(usernameChange(username))
    }
    const setPassword = (password) => {
        dispatch(passwordChange(password))
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleUsernameChange = (event) => {
        setUserName(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleRegistration = (event) => {
        event.preventDefault()
        const userForRegistration = {
            email: email,
            username: username,
            password: password
        }
        axios.post(registrationUrl, userForRegistration).then((response) => {
            console.log(response)
        })
    }

    return (
        <div style={appStyle}>
            <form onSubmit={handleRegistration}>
                <div>
                    <p>Sähköposti: </p>
                    <input type="email" value={email} onChange={handleEmailChange}></input>
                </div>
                <div>
                    <p>Käyttäjänimi: </p>
                    <input value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <p>Salasana: </p>
                    <input type="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type='submit' style={appStyle}>Rekisteröidy</button>
                </div>
            </form>
        </div>
    )
}

export default Registration