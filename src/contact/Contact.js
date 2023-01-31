import './contact.css'
import ContactForm from './ContactForm'
import email from './icons/email.png'
import linkedin from './icons/linkedin.png'
import location from './icons/location.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const contactVariant = {
    visible: { opacity: 1, x: 0},
    hiddenLeft: { opacity: 0, x: 80},
    hiddenRight: { opacity: 0, x: -80},
  }  

  useEffect(() => {
    if(inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
    <section id='contact'>
      <motion.div 
      ref={ref}
      variants={contactVariant}
      transition={{ duration: 0.5}}
      initial="hiddenRight"
      animate={control}         
      className='contact-info'>
        <h3 className='contact-title'>Contact Info</h3>
        <p className='contact-details'>
          <img src={location} className='contact-icon'></img>
          Location:  Suginami, Tokyo
        </p>
        <p className='contact-details'>
          <img src={email} className='contact-icon'></img>
          Email:  justinjkim2015@gmail.com
        </p>
        <p className='contact-details'>
          <img src={linkedin} className='contact-icon'></img>
          LinkedIn:  https://www.linkedin.com/
          </p>
      </motion.div>
      
      <motion.div
      ref={ref}
      variants={contactVariant}
      transition={{ duration: 0.5}}
      initial="hidden"
      animate={control}
      >
        <ContactForm />
      </motion.div>
    </section>
  )
};

export default Contact