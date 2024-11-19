import React from 'react'
import './header.css'
import CTA from './CTA'
<<<<<<< HEAD
import ME from '../../assets/ME-.jpg'
=======
import ME from '../../assets/Profile.jpeg'
>>>>>>> 12d5b70 (Updated project with new changes)
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohammed Ali</h1>
        <h5 className="text-light">
          Web Developer
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className='me' />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header