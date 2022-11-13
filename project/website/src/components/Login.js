import { useState } from 'react'

const Login = ({ username, password }) => {
    const [credentials, setCredentials] = useState([])

    const loginStyle = {
        borderStyle: 'solid',
        padding: 30,
        color: 'black'
    }

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
            <form style={loginStyle}>
                <input value={credentials} style={loginStyle}></input>
                <button type="submit" style={loginStyle}>Kirjaudu: </button>
            </form>
    )
}

export default Login