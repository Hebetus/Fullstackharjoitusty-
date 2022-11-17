import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userChange } from '../reducers/userReducer'

import Posts from './Posts'
import Navbar from './Navbar'

const App = () => {
  const user = useSelector(state => state.user)

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
   * IMPLEMENT LOGOUT FUNCTIONALITY AND CONDITIONAL RENDERING BASED ON LOGIN-LOGOUT STATE
   * IMPLEMENT REGISTRATION FUNCTIONALITY
   */

  return (
    <div style={appStyle}>
      <Navbar />
      <Posts />
    </div>
  )
}

export default App;