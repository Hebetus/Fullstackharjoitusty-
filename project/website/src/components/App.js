import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { userChange } from '../reducers/userReducer'

import Posts from './Posts'
import Login from './Login'
import Registration from './Registration'
import Frontpage from './Frontpage'
import Footer from './Footer'

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
   * ADD CONTENT TO FRONTPAGE AND REGISTRATION COMPONENTS
   * IMPLEMENT LOGOUT FUNCTIONALITY AND CONDITIONAL RENDERING BASED ON LOGIN-LOGOUT STATE
   * CONSIDER IMPLEMENTING A UI FRAMEWORK LIKE REACT BOOTSTRAP OR MATERIELUI
   * ADD HTML SUPPORT FOR EMAIL AND PASSWORD FIELDS IN REGISTATION AND LOGIN COMPONENTS
   */

  return (
    <div>
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