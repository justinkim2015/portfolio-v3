import './about.css'
import me from './me-nobackground.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const aboutVariant = {
    visible: { opacity: 1, y: 0, transition:{duration: 0.6} },
    hidden: { opacity: 0, y: 20 },
  }  

  useEffect(() => {
    if(inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
    <section id='about'>
      <motion.div 
      ref={ref}
      variants={aboutVariant}
      initial="hidden"
      animate={control}   
      className='about-content'
      >
        <div className='about-container'>
          <h2 className='about-title'>About me</h2>
          <h6 className='about-subtitle'>Web Developer</h6>
          <p className='about-text'>
            Web developer living in Tokyo who likes to make stuff with his computer. Right now I'm working on the backend with Kotlin and Spring Boot. I'm fluent in English and I can speak business level Japanese. Let's get in touch!
          </p>
          <div class="button-tray">
            <a href='https://justinkim2015.github.io/resume/' className='blue-button resume'>Resume</a>
            <a href='https://justinkim2015.github.io/rirekisho/' className='white-button resume'>履歴書</a>
          </div>
        </div>
        <img src={me} className='justin-image' alt='justin in a suit'></img>
      </motion.div>
    </section>
  )
}

export default About