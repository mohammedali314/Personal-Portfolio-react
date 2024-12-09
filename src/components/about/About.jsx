import React from 'react'
import './about.css'
import ME from '../../assets/pr.jpeg'
import {FaGraduationCap} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'
import {BiCodeAlt} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className='aboutImage' src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaGraduationCap className='about__icon' />
              <h5>Under Matric</h5>
              <small>Computer Science</small>
            </article>
          
            <article className='about__card'>
              <FaUniversity className='about__icon' />
              <h5>High School</h5>
              <small>Goverment High School</small>
            </article>
          
            <article className='about__card'>
              <BiCodeAlt className='about__icon' />
              <h5>Full-Stack</h5>
              <small>Developer</small>
            </article>
          </div>
          <p>
            Hey there! My name is Mohammed Ali. 👨‍💻 Full Stack Developer | 💡 Crafting modern, responsive websites with HTML, CSS, JavaScript, React & Node.js | 🔗 Backend wizardry with MongoDB & APIs | 🚀 Bringing end-to-end solutions to life with clean, scalable code | Let's build something extraordinary! ✨
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About