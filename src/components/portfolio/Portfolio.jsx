import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/CyberFiction.png'
import IMG2 from '../../assets/PrinceVibe.png'
import IMG3 from '../../assets/blog.png'
import IMG4 from '../../assets/newalghani.png'
import IMG5 from '../../assets/nag-portal.png'
import IMG6 from '../../assets/Random-Joke.png'

const data = [
  {
    id: 1,
    image: IMG4,
    title: 'New Al-Ghani Travel Agency Website',
    github: 'https://github.com/mohammedali314/newalghanisite-frontend',
    demo: 'https://newalghani.com/'
  },
  {
    id: 2,
    image: IMG5,
    title: 'Travel Agency Web Portal',
    github: 'https://github.com/mohammedali314/NAG-travel',
    demo: 'https://portal.newalghani.com/'
  },
  {
    id: 3,
    image: IMG1,
    title: 'CyberFiction',
    github: 'https://github.com/mohammedali314/cyberfiction-frontend-GSAP',
    demo: 'https://mohammedali314.github.io/cyberfiction-frontend-GSAP/'
  },
  {
    id: 4,
    image: IMG2,
    title: 'PrinceVibe Ecommerce Store',
    github: 'https://github.com/mohammedali314/princevibe-eccomerce',
    demo: 'http://princevibe-eccomerce.vercel.app/'
  },
  {
    id: 5,
    image: IMG3,
    title: 'Full Stack Blog App',
    github: 'https://github.com/mohammedali314/React_Blog_Mega_Project/',
    demo: 'https://react-mega-blog.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Random Jokes Generator',
    github: 'https://github.com/mohammedali314/Random-Jokes-Generator',
    demo: 'https://mohammedali314.github.io/Random-Jokes-Generator/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHUB</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Portfolio