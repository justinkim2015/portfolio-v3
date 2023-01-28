import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import About from './about/About.js'

function App() {
  return (
    <div>
      <div id="content">
        <Navbar />
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
