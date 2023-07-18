import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginStatusChange } from '../../reducers/loginReducer'

const Logout = ({ setLoginStatus }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const appStyle = {
        margin: 5,
        fontFamily: 'monospace',
        fontSize: 16,
        display: 'flex',
        justifyContent: 'center'
    }

    const handleLogout = (event) => {
        event.preventDefault()
        localStorage.clear()
        dispatch(loginStatusChange(false))
        setLoginStatus(false)
        navigate('/')
    }

    return (
        <div style={appStyle}>
            <button onClick={handleLogout} style={appStyle}>Kirjaudu ulos</button>
        </div>
    )
}

export default Logout