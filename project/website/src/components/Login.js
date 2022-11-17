import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { usernameChange, passwordChange } from '../reducers/loginReducer'

const Login = () => {
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

    const inputStyle = {
        borderStyle: 'solid',
        padding: 10,
        color: 'black'
    }

    const loginStyle = {
        
        padding: 10,
        color: 'black'
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
    
    return (
            <form onSubmit={handleLogin} style={loginStyle}>
                <input value={username} onChange={handleUsernameChange} style={inputStyle}></input>
                <input value={password} onChange={handlePasswordChange} style={inputStyle}></input>
                <button type="submit" style={inputStyle}>Kirjaudu</button>
            </form>
    )
}

export default Login