import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { userChange } from '../reducers/userReducer'

import Posts from './Posts'
import Login from './Login'
import Registration from './Registration'
import Frontpage from './Frontpage'
import Footer from './Footer'
import Notification from './Notification'

const App = () => {
  const appStyle = {
    margin: 5,
    fontFamily: 'monospace',
    fontSize: 16
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
    }
  }, [])

  /**
   * ADD SUPPORT FOR GRAPHQL FOR THE POSTS COMPONENT
   */

  return (
    <div>
      <Notification />
      <Router style={appStyle} >
        <div>
          <div>
            <Link style={appStyle} to="/">etusivu</Link>
            <Link style={appStyle} to="/posts">postaukset</Link>
            <Link style={appStyle} to="/login">kirjautuminen</Link>
            <Link style={appStyle} to="/registration">rekisteröityminen</Link>
          </div>

          <Routes>
            <Route path="/posts" element={<Posts style={appStyle} />} />
            <Route path="/login" element={<Login style={appStyle} />} />
            <Route path="/registration" element={<Registration style={appStyle} />} />
            <Route path="/" element={<Frontpage />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App;