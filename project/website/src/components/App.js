import Map from './Map';
import Button from './Button';
import Posts from './Posts';
import Navbar from './Navbar';

import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  const postsInit = [
    {
      id: 0,
      author: "Emil Hellberg",
      content: "Märy on tosi kiva paikka"
    },
    {
      id: 1,
      author: "Matti Korhonen",
      content: "neekerit vittuu märyst"
    },
    {
      id: 2,
      author: "Vesa Virtanen",
      content: "Kalja tekee kyl hyvää pitkä työpäivä jälkee"
    }
  ]

  useEffect(() => {
    axios.get('http://localhost:3001/posts').then(
      response => {
        console.log(response.data)
        setPosts(response.data)
        console.log(response.data)
      }
    )

    axios.get('http://localhost:3001/users').then(
      response => {
        console.log(response.data)
        setUsers(response.data)
        console.log(response.data)
      }
    )
  }, [])

  return (
    <>
      <Navbar />
      <Posts posts={posts} />
      <Map />
      <Button />
    </>
  )
}

export default App;