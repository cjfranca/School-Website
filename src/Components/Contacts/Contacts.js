import React from 'react'
import './Contacts.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import locationl_icon from '../../assets/location-icon.png'
import white_icon from '../../assets/white-arrow.png'



const Contacts = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "Coloque sua chave aqui.");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Mensagem enviado com sucesso!!!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contacts'>
        <div className='contacts-col'>
            <h3>Envie-nos sua mensagem <img src={msg_icon} alt='' /></h3>
            <p>Texto sobre  a mensagem enviada ... </p>
            <p>Texto sobre  a mensagem enviada ...</p>
            <p>Texto sobre  a mensagem enviada ...</p>
            <ul>
                <li><img src={mail_icon} /> maiseduca@maiseduca.com.br</li>
                <li><img src={phone_icon} /> 55- 11 -999999999 </li>
                <li><img src={locationl_icon}/> Av: Alphaville, 1000, 20andar. Barurei - SP </li>
            </ul>
        </div>
        <div className='contacts-col'>
            <form onSubmit={onSubmit}>
                <label> Digite seu nome completo</label>
                <input type='text' name='name' placeholder='Ex: José da Silva' required/>
                <label>Digite seu telefone</label>
                <input type='text' name='phone' placeholder='55 11 999999999' required/>
                <label> Digite sua mensagem</label>
                <textarea name='message' id=''  rows='10' required placeholder='Escreva sua mensagem' ></textarea>
                <button type='submit' className='btn dark-btn'>Enviar agora <img src={white_icon} /></button>
            </form>
            <span>{result}</span>

        </div>      
    </div>
  )
}

export default Contacts
