import './skills.css'
import front from './front.png'
import back from './back.png'
import tool from './tool.png'

const Skills = () => {
  return (
    <section id='skills'>
      <div className="skills-header">
        <h2 className='skills-title'>Skills</h2>
        <h6 className='skills-subtitle'>My core competencies and things I do.</h6>
        <div className='underbar'></div>
      </div>

      <div className='frontend'>
        <div className='circle'><img src={front} className='skill-icon'></img></div>
        <h3 className='skill-title'>Front-end Development</h3>
        <ul className='skill-list'>
          <li className='skill'>JavaScript</li>
          <li className='skill'>HTML5</li>
          <li className='skill'>CSS3</li>
          <li className='skill'>ReactJS</li>
        </ul>
      </div>

      <div className='backend'>
        <div className='circle'><img src={back} className='skill-icon'></img></div>
        <h3 className='skill-title'>Back-end Development</h3>
        <ul className='skill-list'> 
          <li className='skill'>Ruby & Ruby on Rails</li>
          <li className='skill'>PostgreSQL</li>
          <li className='skill'>JavaScript</li>
          <li className='skill'>RSpec</li>
          <li className='skill'>Minitest</li>
        </ul>
      </div>

      <div className='dev'>
        <div className='circle'><img src={tool} className='skill-icon'></img></div>
        <h3 className='skill-title'>Development Tools</h3>
        <ul className='skill-list'>
          <li className='skill'>Git & Github</li>
          <li className='skill'>VSCode</li>
          <li className='skill'>Webpack</li>
          <li className='skill'>Linux</li>
          <li className='skill'>Dokku</li>
        </ul>
      </div>
      
    </section>
  )
}

export default Skills