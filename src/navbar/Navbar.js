import './navbar.css'
import hamburger from './white-hamburger.png'
import jk from './jk.png'

const Navbar = () => {
  return (
    <nav id='navbar'>
      <img src={jk} className='logo'></img>
      <img src={hamburger} className='hamburger-button'></img>

      <ul className='hamburger-menu'>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar