/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/perfil.png';
import { BsAward } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { BsFolderCheck } from 'react-icons/bs';

function About() {
  return (
    <section id='about'>
      <h5>Me Conheça</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>1 Ano de Trabalho</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>40+ Clientes</small>
            </article>
            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Projetos</h5>
              <small>80+ Projetos</small>
            </article>
          </div>

          <p>
          Olá Devs🙋🏼‍♂️, meu nome é Felipe, sou do Brasil 🇧🇷, atualmente estou estudando desenvolvimento Full-Stack 📚, sempre fui apaixonado pela área de informática, espero que gostem do meu perfil.💜
          🚀 "Sou feliz, porque aceito quem fui no passado, gosto de quem sou no presente e luto para ser ainda melhor no futuro." 🌍
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar!</a>
        </div>
      </div>
    </section>
  )
}

export default About