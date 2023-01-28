import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import About from './about/About.js'
import Skills from './skills/Skills.js'
import Projects from './projects/Projects.js'

function App() {
  return (
    <div>
      <div id="content">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
