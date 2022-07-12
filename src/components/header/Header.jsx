import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/perfil.png'
import HeaderSocial from './HeaderSocial';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Felipe Kreulich</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Para o fim.</a>
      </div>
    </header>
  )
}

export default Header