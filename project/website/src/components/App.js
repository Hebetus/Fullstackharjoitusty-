import Posts from './Posts';
import Newpost from './Newpost';
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
      <Newpost />
      <Footer />
    </div>
  )
}

export default App;