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
          <a href="#about" className='link'>About</a>
          <a href="#skills" className='link'>Skills</a>
          <a href="#projects" className='link'>Projects</a>
          <a href="#contact" className='link'>Contact</a>
        </ul>
      </div>

      <div className='desktop'>
        <ul id='menu' className='desktop-links'>
          <a href="#"><img src={jk} className='logo'></img></a>
          <ul className='link-container'>
            <a href="#about" className='link'>About</a>
            <a href="#skills" className='link'>Skills</a>
            <a href="#projects" className='link'>Projects</a>
            <a href="#contact" className='link'>Contact</a>
          </ul>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar