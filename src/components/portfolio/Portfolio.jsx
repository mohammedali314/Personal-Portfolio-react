import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/CyberFiction.png'
import IMG2 from '../../assets/SUN.png'
import IMG3 from '../../assets/blog.png'
import IMG4 from '../../assets/Learners.png'
import IMG5 from '../../assets/router.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'CyberFiction',
    github: 'https://github.com/Aliking314/cyberfiction-frontend-GSAP',
    demo: 'https://aliking314.github.io/cyberfiction-frontend-GSAP/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Sundown Website',
    github: 'https://github.com/Aliking314/Sundown-website-project',
    demo: 'https://aliking314.github.io/Sundown-website-project/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Full Stack Blog App',
    github: 'https://github.com/Aliking314/React_Blog_Mega_Project/',
    demo: 'https://react-mega-blog.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'All Project Are on This Website',
    github: 'https://github.com/Aliking314/React_Blog_Mega_Project/',
    demo: 'https://learnwithali.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'React Website',
    github: 'https://github.com/Aliking314/React-Router',
    demo: 'https://github.com/Aliking314/'
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