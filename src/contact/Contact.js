import './contact.css'
import ContactForm from './ContactForm'
import email from './icons/email.png'
import linkedin from './icons/linkedin.png'
import location from './icons/location.png'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact-info'>
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
      </div>
      
      <ContactForm />
    </section>
  )
};

export default Contact