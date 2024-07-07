import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const sliderForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const sliderBackward = ()=>{
        if(tx > 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        
    }



  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={sliderForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={sliderBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                       <div className='user-info'>
                        <img src={user_1} alt='' />
                        <div>
                            <h3> Rose José Wilson</h3>
                            <span>Educamais, Cerqueira César - São Paulo-SP</span>
                        </div>
                       </div>
                       <p>
                        Texto sobre  o que o aluno fala do campus onde estuda....
                       </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                       <div className='user-info'>
                        <img src={user_2} alt='' />
                        <div>
                            <h3> Rogério José Lima</h3>
                            <span>Educamais, Alphaville-São Paulo-SP</span>
                        </div>
                       </div>
                       <p>
                        Texto sobre  o que o aluno fala do campus onde estuda....
                       </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                       <div className='user-info'>
                        <img src={user_3} alt='' />
                        <div>
                            <h3> Maria José Da Silva</h3>
                            <span>Educamais, Brasília-DF</span>
                        </div>
                       </div>
                       <p>
                        Texto sobre  o que o aluno fala do campus onde estuda....
                       </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                       <div className='user-info'>
                        <img src={user_4} alt='' />
                        <div>
                            <h3> Franchesca Vignhonne</h3>
                            <span>Educamais, Rio de Janeiro-RJ</span>
                        </div>
                       </div>
                       <p>
                        Texto sobre  o que o aluno fala do campus onde estuda....
                       </p>
                    </div>
                </li>
            </ul>


        </div>
       
    </div>
  )
}

export default Testimonials
