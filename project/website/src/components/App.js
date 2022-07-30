import Map from './Map';
import Button from './Button';
import { useState } from 'react';

const App = () => {
  const [example, setExample] = useState("Example string")

  return (
    <>
      <p>Greetings, this website is a study project to showcase my home village</p>
      <p>{example}</p>
      <Map />
      <Button />
    </>
  )
}

export default App;