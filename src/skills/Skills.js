import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <h2 className='skills-title'>Skills</h2>
      <h6 className='skills-subtitle'>My core competencies and things I do.</h6>
      <div className='underbar'></div>

      <div className='frontend'>
        <h3 className='skill-title'>Front-end Development</h3>
        <ul className='skill-list'>
          <li className='skill'>JavaScript</li>
          <li className='skill'>HTML5</li>
          <li className='skill'>CSS3</li>
          <li className='skill'>ReactJS</li>
        </ul>
      </div>

      <div className='backend'>
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