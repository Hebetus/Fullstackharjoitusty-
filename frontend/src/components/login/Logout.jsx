import { useNavigate } from 'react-router-dom'

import { logoutStyle } from './LoginStyles'

const Logout = ({ setLoginStatus }) => {
    const navigate = useNavigate()

    const handleLogout = (event) => {
        event.preventDefault()
        localStorage.clear()
        setLoginStatus(false)
        navigate('/')
    }

    return (
        <div style={logoutStyle()}>
            <button onClick={handleLogout} style={logoutStyle()}>Kirjaudu ulos</button>
        </div>
    )
}

export default Logout