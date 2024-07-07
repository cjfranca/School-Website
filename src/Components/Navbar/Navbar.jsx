/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    const[sticky, setStick] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setStick(true): setStick(false);
      })
    },[]);

    const [mobileMenu, setMobileMenu]= useState(false);
    const toggleMenu = ()=>{
      mobileMenu? setMobileMenu(false): setMobileMenu(true);

    }

  return (
    <nav className={`container ${sticky ? 'dark-nav' :''}`}>
        <img src={logo} alt='' className='logo'/>
        <ul className={mobileMenu?"":"hide-mobile-menu"}>
          <li> <Link to = 'hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to = 'programs' smooth={true} offset={-260} duration={500}>Programas</Link></li>
          <li><Link to = 'about' smooth={true} offset={-150} duration={500}>Sobre nós</Link></li>
          <li><Link to = 'campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
          <li><Link to = 'testimonials' smooth={true} offset={-260} duration={500}>Depoimentos</Link></li>
          <li><Link to = 'contacts' smooth={true} offset={-260} duration={500}><button className='btn'>Contato</button></Link></li>
        </ul>
        <img src={menu_icon}alt=''className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
