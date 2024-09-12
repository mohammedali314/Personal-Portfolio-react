import React, { useRef } from 'react';
import './contact.css';
import { FiMail } from 'react-icons/fi';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Send email using EmailJS
    emailjs.sendForm('service_t4p291a', 'template_0gjgs4s', form.current, 'HmeW-CUUDymQLoOeQ')
      .then((result) => {
          console.log(result.text); // Log success message
          e.target.reset(); // Reset form after successful submission
      }, (error) => {
          console.log(error.text); // Log error message
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mohammedali31455@gmail.com</h5>
            <a href="mailto:mohammedali31455@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BiLogoFacebook className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://www.facebook.com/profile.php?id=61564848989496" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+92 332 5122666</h5>
            <a href="https://wa.me/+92332512266" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
