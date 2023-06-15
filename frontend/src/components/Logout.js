import { useDispatch } from 'react-redux'
import { loginStatusChange } from '../reducers/loginReducer'

const Logout = () => {
    const dispatch = useDispatch()
    const appStyle = {
        margin: 5,
        fontFamily: 'monospace',
        fontSize: 16
    }

    const handleLogout = (event) => {
        event.preventDefault()
        localStorage.clear()
        dispatch(loginStatusChange(false))
    }

    return (
        <div style={appStyle}>
            <button onClick={handleLogout} style={appStyle}>Kirjaudu ulos</button>
        </div>
    )
}

export default Logout