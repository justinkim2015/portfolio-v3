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
        <div className="project-text">
          <h3 className='project-name'>Karaoke Song Organizer</h3>
          <p className='project-desc'>This Ruby on Rails application keeps track of karaoke songs and stores. By using several Google APIs, Genius API, an IP geocoding API, and webscraping it is able to find and save song lyrics and nearby karaoke stores.</p>
        </div>
      </div>

      <div className='underbar'></div>

      <div className='project'>
        <img src={railsbook} className='project-image'></img>
        <div className="project-text">
          <h3 className='project-name'>RailsBook</h3>
          <p className='project-desc'>I made this with Ruby on Rails and hosted on Render. This is a social media site where one can post, add friends, and upload photos.</p>
        </div>
      </div>

      <div className='underbar'></div>

      <div className='project'>
        <img src={chess} className='project-image'></img>
        <div className="project-text">
          <h3 className='project-name'>Two-Player CLI Chess</h3>
          <p className='project-desc'>This is a two-player chess game built in Ruby using OOP principles.  Players can save the game and continue from any point.</p>
        </div>
      </div>

      <div className='underbar'></div>

      <div className='project'>
        <img src={weather} className='project-image'></img>
        <div className="project-text">
          <h3 className='project-name'>iPad Weather App</h3>
          <p className='project-desc'>This is a single-page weather application made with ReactJS and vanilla CSS. By leveraging the data of a Geolocation API and a weather API this app shows you real-time data of the weather in your area.</p>
        </div>
      </div>

    </section>
  )
}

export default Projects