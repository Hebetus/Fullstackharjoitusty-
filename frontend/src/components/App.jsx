import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { userChange } from '../reducers/userReducer'

import Posts from './board/Posts'
import Logout from './login/Logout'
import Login from './login/Login'
import Registration from './registration/Registration'
import Frontpage from './frontpage/Frontpage'
import Notification from './Notification'

const App = () => {
  const [isLoggedIn, setLoginStatus] = useState(false)

  const appStyle = {
    padding: 10,
    fontFamily: 'monospace',
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

  const rootStyle = {
    backgroundColor: '#ccccb3'
  }

  const dispatch = useDispatch()
  const setUser = (loggedInUser) => {
    dispatch(userChange(loggedInUser))
  }

  useEffect(() => {
    if (window.localStorage.getItem('username') && window.localStorage.getItem('password') && window.localStorage.getItem('token')) {
      const loggedInUser = {
        username: window.localStorage.getItem('username'),
        password: window.localStorage.getItem('password'),
        token: window.localStorage.getItem('token')
      }
      setUser(loggedInUser)
      setLoginStatus(true)
      console.log(loggedInUser)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={rootStyle}>
      <Notification />
      <Router>
        <div>
          <div style={appStyle}>
            <Link style={appStyle} to="/">etusivu</Link>
            <Link style={appStyle} to="/posts">lauta</Link>
            {isLoggedIn ? <Link style={appStyle} to="/logout">kirjaudu ulos</Link> : <Link style={appStyle} to="/login">kirjaudu</Link>}
            {isLoggedIn ? null : <Link style={appStyle} to="/registration">rekisteröidy</Link>}
          </div>

          <Routes>
            <Route path="/posts" element={<Posts style={appStyle} />} />
            <Route path="/logout" element={<Logout setLoginStatus={setLoginStatus} />} />
            <Route path="/login" element={<Login style={appStyle} setLoginStatus={setLoginStatus} />} />
            <Route path="/registration" element={<Registration style={appStyle} setLoginStatus={setLoginStatus} />} />
            <Route path="/" element={<Frontpage />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;