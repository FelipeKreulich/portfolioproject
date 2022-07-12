/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpeg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    demo: 'htpps://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    demo: 'htpps://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    demo: 'htpps://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    demo: 'htpps://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    demo: 'htpps://github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    demo: 'htpps://github.com'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Meus Trabalhos Recentes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demonstração</a>
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