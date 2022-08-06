import Map from './Map';
import Button from './Button';
import Posts from './Posts';

const App = () => {
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

  return (
    <>
      <p>Greetings, this website is a study project to showcase my home village</p>
      <Posts posts={postsInit} />
      <Map />
      <Button />
    </>
  )
}

export default App;