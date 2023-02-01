import './navbar.css'
import hamburger from './black-hamburger.png'
import jk from './jk.png'
import { motion } from "framer-motion"

const Navbar = () => {
  const toggle = () => {
    let hamburger = document.querySelector('#menu')
    hamburger.classList.toggle('hamburger-menu-active')    
    hamburger.classList.toggle('hamburger-menu-inactive')    
  }

  return (
    <nav id='navbar'>
      <div className='mobile'>
        <img src={jk} className='logo'></img>
        <img src={hamburger} className='hamburger-button' onClick={toggle}></img>
        <ul id='menu' className='hamburger-menu-inactive hamburger-menu'>
          <li className='link'>About</li>
          <li className='link'> Skills</li>
          <li className='link'>Projects</li>
          <li className='link'>Contact</li>
        </ul>
      </div>

      <div className='desktop'>
        <ul id='menu' className='desktop-links'>
          <img src={jk} className='logo'></img>
          <div className='link-container'>
            <li className='link'>About</li>
            <li className='link'> Skills</li>
            <li className='link'>Projects</li>
            <li className='link'>Contact</li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar