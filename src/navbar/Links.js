import './navbar.css'

const Links = ({classInfo}) => {
  return (
    <ul className={classInfo}>
      <a href="#about" className='link'>About</a>
      <a href="#skills" className='link'>Skills</a>
      <a href="#projects" className='link'>Projects</a>
      <a href="#contact" className='link'>Contact</a>
    </ul>
  )
}

export default Links