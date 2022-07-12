import React from 'react'
import './footer.css';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>FelipeKreulich</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://github.com"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Felipe Kreulich. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
  
}

export default Footer