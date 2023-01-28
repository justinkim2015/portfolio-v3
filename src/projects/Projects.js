import './projects.css'
import karaoke from './karaoke.png'
import railsbook from './railsbook.png'
import chess from './chess.png'
import weather from './weather.png'

const Projects = () => {
  return (
    <section id='projects'>
      <div className="projects-header">
        <h2 className='projects-title'>My Projects</h2>
        <h6 className='projects-subtitle'>Check out some the projects I've made.</h6>
        <div className='underbar'></div>
      </div>

      <div className='project'>
        <img src={karaoke} className='project-image'></img>
      </div>

      <div className='project'>
        <img src={railsbook} className='project-image'></img>
      </div>

      <div className='project'>
        <img src={chess} className='project-image'></img>
      </div>

      <div className='project'>
        <img src={weather} className='project-image'></img>
      </div>
    </section>
  )
}

export default Projects