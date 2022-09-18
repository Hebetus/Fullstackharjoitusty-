import Posts from './Posts';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  const appStyle = {
    margin: 5,
    fontFamily: 'monospace',
    fontSize: 16
  }

  return (
    <div style={appStyle}>
      <Navbar />
      <Posts />
      <Footer />
    </div>
  )
}

export default App;