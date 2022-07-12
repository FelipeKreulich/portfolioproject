/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

function Contact() {
  return (
    <section id='contact'>
      <h5>Entre em Contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>felipek2002k@gmail.com</h5>
            <a href="mailto:felipek2002k@gmail.com">Envie uma mensagem</a>
          </article>
          <article className='contact__option'>
            <RiFacebookBoxLine className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>Felipe Kreulich</h5>
            <a href="https://facebook.com/FelipeKreulich">Me adicione</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+55 67 98158-0124</h5>
            <a href="https://api.whatsapp.com/send?phone+5567981580124">Envie uma Mensagem</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Nome Completo' required />
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name="message" rows='7' placeholder="Sua mensagem" required ></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact