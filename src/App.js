import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title  from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
        <div className='container'>
            <Title subTitle ='NOSSOS PROGRAMAS' Title='O que nós oferecemos ?' />
            <Programs/>
            <About/>
            <Title subTitle ='Galeria' Title='Fotos de outros campos' />
            <Campus />
            <Title subTitle ='Depoimentos' Title='O que nosso estudante dizem sobre nós ?' />
            <Testimonials/>
            <Title subTitle ='Fale conosco' Title='Com poucos toques' />
            <Contacts/>
            <Footer/>
          

        </div>
      
        
      
    </div>
  )
}

export default App
