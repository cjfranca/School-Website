import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about-img'/>      
            <img src={play_icon} alt='' className='play-icon'/>         
        </div> 

        <div className='about-right' >
            <h3>SOBRE NOSSA INSTITUIÇÃO</h3>
            <h2>Ensinamos hoje para garantir um amanhã mais justo para todos.</h2>
            <p> Texto da história da instituição,Texto 2 da história da instituição<br></br></p>Texto 2 da história da instituição Texto 2 da história da instituição Texto 2 da história da instituição Texto 2 da história da instituição
            <p> Texto 2 da história da instituição</p>
            <p> Texto 3 da história da instituição</p>
        </div>     
    </div>
  )
}

export default About
