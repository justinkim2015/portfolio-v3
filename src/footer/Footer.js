import './footer.css'
import github from '../logos/github-white.png'
import linkedin from '../logos/linkedin-white.png'
import logo from './main-logo-white.png'

const Footer = () => {
  return (
    <section id='footer'>
      <img src={logo} className='footer-logo'></img>
      <div className='icon-bar'>
        <a href="http://www.github.com" className='icon-holder'><img src={github} className='social-icon'></img></a>

        <a href="http://www.linkedin.com" className='icon-holder'><img src={linkedin} className='social-icon'></img></a>
      </div>
      <p className='inspired-by'><i>Inspiration from blazethemes.com</i></p>
      <p className='made-by'>Created by Justin Kim, 2023</p>
    </section>
  )
};

export default Footer