import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
     <a href="http://instagram.com/webdevelops314" target='_blank'><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/mohammed-ali314/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Aliking314" target='_blank'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials