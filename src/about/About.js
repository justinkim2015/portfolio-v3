import './about.css'

const About = () => {
  return (
    <section id='about'>
      <div className='about-content'>
        <h2 className='about-title'>About me</h2>
        <h6 className='about-subtitle'>Full-stack Web Developer</h6>
        <p className='about-text'>
          Full-stack developer living in Tokyo who likes to make stuff with his computer. Currently, I am focused on building applications using Ruby on Rails as a back-end and ReactJS for the front. I'm fluent in English and I can speak business level Japanese. Please check out some of my projects and get in touch!
        </p>
        <button className='white-button resume'>Download Resume</button>
        <button className='blue-button jp-resume'>履歴書</button>
      </div>
    </section>
  )
}

export default About