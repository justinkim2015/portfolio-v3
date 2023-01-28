import './home.css'
import github from './logos/github.png'
import linkedin from './logos/linkedin.png'

const Home = () => {
  return (
    <section id='home'>
      <div id='banner-content'>
        <h2 className='hello'>Hi there,</h2>
        <p className='name'>I'm Justin Kim.</p>
        <p className='my-desc'>Full-stack web developer</p>
        <div className='icon-bar'>
          <a href="http://www.github.com" className='icon-holder'><img src={github} className='social-icon'></img></a>

          <a href="http://www.linkedin.com" className='icon-holder'><img src={linkedin} className='social-icon'></img></a>
        </div>
      </div>
    </section>
  )
}

export default Home