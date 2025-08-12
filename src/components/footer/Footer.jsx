import React from 'react'
import './footer.css'
import {BsInstagram, BsTiktok} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__thanks'>Thank You!</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://instagram.com/webdevelops314" target='_blank'><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/mohammed-ali314/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Aliking314" target='_blank'><BsGithub /></a>
        <a href="https://www.tiktok.com/@webdevelops314" target='_blank'><BsTiktok /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Mohammed ali. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer