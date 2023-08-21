import { useEffect, useState } from 'react'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import MobilePosts from './board/MobilePosts'
import Posts from './board/Posts'
import Logout from './login/Logout'
import Login from './login/Login'
import Registration from './registration/Registration'
import Frontpage from './frontpage/Frontpage'
import MobileFrontpage from './frontpage/MobileFrontpage'
import Map from './map/Map'
import ProfilePage from './profile/ProfilePage'
import Notification from './Notification'

import logo from '../../src/images/logo.jpg'

import { appStyle, rootStyle } from './AppStyles'

const App = () => {
  const [isLoggedIn, setLoginStatus] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem('username') && window.localStorage.getItem('password') && window.localStorage.getItem('token')) {
      setLoginStatus(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  const handleLogout = (event) => {
    event.preventDefault()
    localStorage.clear()
    setLoginStatus(false)
  }

  return (
    <div style={rootStyle()}>
      <Notification />
      <Router>
        <div>
          <div style={appStyle()}>
            <img src={logo} alt='märyn logo'/>
            <Link style={appStyle()} to="/">etusivu</Link>
            <Link style={appStyle()} to="/posts">lauta</Link>
            <Link style={appStyle()} to="/map">kartta</Link>
            {isLoggedIn ? <Link style={appStyle()} to="/profile">omat tiedot</Link> : null}
            {isLoggedIn ? <Link style={appStyle()} to="/logout" onClick={handleLogout}>kirjaudu ulos</Link> : <Link style={appStyle()} to="/login">kirjaudu</Link>}
            {isLoggedIn ? null : <Link style={appStyle()} to="/registration">rekisteröidy</Link>}
          </div>

          <Routes>
            <Route path="/posts" element={isMobile ? <MobilePosts style={appStyle()} isLoggedIn={isLoggedIn} /> : <Posts style={appStyle()} isLoggedIn={isLoggedIn} />} />
            <Route path="/map" element={<Map />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/logout" element={<Logout setLoginStatus={setLoginStatus} />} />
            <Route path="/login" element={<Login style={appStyle()} setLoginStatus={setLoginStatus} />} />
            <Route path="/registration" element={<Registration style={appStyle()} setLoginStatus={setLoginStatus} />} />
            <Route path="/" element={isMobile ? <MobileFrontpage /> : <Frontpage />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;