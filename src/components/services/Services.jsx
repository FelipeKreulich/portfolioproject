import React from 'react'
import './services.css';
import { BsCheck2 } from 'react-icons/bs';

function Services() {
  return (
    <section id='services'>
      <h5>O que posso oferecer?r</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
      <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
              <ul className='service__list'>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Criação de Interfaces Amigáveis.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Dar vida ao seu site.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Elaborar design inteligente para seu programa.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Criação de design para produtos Físicos.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Arquitetura da Informação.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Key Performance Indicator. (Indicadores-chave da performance)</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Design Thinking</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Gamificação</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Design de Interfaces</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Princípios de UI/UX</p>
                </li>
              </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Criação de Conteúdo</h3>
          </div>
              <ul className='service__list'>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Áudios.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Textos.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Criador de Conteúdo Digital.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Conhecimento de SEO.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Atualização Constante.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Organização.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Autenticidade.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Criatividade.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Marketing.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Copywriting.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Storytelling.</p>
                </li>
              </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>
              <ul className='service__list'>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Client-side.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Server-side.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Tecnologia de Database.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Criação de Site ou Aplicação Web.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Backend (Frontend Funcional).</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Desenvolvimento de Landing Pages.</p>
                </li>
                <li>
                  <BsCheck2 className='service__list-icon' />
                  <p>Criação de Aplicações Intuitivas.</p>
                </li>
              </ul>
        </article>
      </div>
    </section>
  )
}

export default Services