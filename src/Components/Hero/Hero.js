import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Somos a instituição  mais bem preparada para o seu futuro  e do seu filho</h1>
            <p>Nosso curriculum proporciona que o estudando desenvolva vários talentos além do conhecimento técnico. Com atividades práticas para trazer experiência marcante e decisiva na hora de escolher em qual área trabalhar.</p>
            <button className='btn'>Saiba mais <img src={dark_arrow} alt='' /></button>

        </div>
      
    </div>
  )
}

export default Hero
