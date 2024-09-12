import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Can Do</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Web Design 🎨</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Web Development 📱</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interactive User Interfaces 💬
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript & React Development ⚛️</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI/UX Enhancements 🛠️</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className='service'>
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API Development & Integration 🔗</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Server-Side Logic & Development 💻</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Design & Management 🗃️</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Authentication & Authorization 🔒</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Performance Optimization ⚙️</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Real-Time Data Handling 📈</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}

        <article className='service'>
          <div className="service__head">
            <h3>Full Stack Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Web Applications 🌐</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API Development & Integration 🔗</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Design & Management 🗃️</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>End-to-End Project Management 📈</p>
            </li>
          </ul>
        </article>
        {/*END OF Content Creation*/}

      </div>
    </section>
  )
}

export default Services