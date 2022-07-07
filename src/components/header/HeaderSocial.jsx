import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

function HeaderSocial() {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><RiInstagramFill /></a>
    </div>
  )
}

export default HeaderSocial