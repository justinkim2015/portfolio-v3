import './navbar.css'
import hamburger from './white-hamburger.png'
import jk from './jk.png'

const Navbar = () => {
  const toggle = () => {
    let hamburger = document.querySelector('.hamburger-menu')
    hamburger.classList.toggle('hidden')
  }

  return (
    <nav id='navbar'>
      <img src={jk} className='logo'></img>
      <img src={hamburger} className='hamburger-button' onClick={toggle}></img>

      <ul className='hamburger-menu hidden'>
        <li className='link'>About</li>
        <li className='link'> Skills</li>
        <li className='link'>Projects</li>
        <li className='link'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar