import React, { useState } from 'react'
import './LoginESignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import senha_icon from '../assets/password.png'
//import logo_visualRoom from '../assets/VisualRoomLogo.svg'
//import logo_visualRoom from '../assets/teste1.png'
//import logo_visualRoom from '../assets/TesteFundoAzul.png'
import logo_visualRoom from '../assets/TesteLogoBranca.png'

const LoginESignup = () => {


  const [action,setAction] = useState("Criar conta");

  return (
    <div className='logo1'>
      <img className='imgLogo' src={logo_visualRoom} alt="" />
    <div className='container'> 
      <div className="header">
        <div className="text">{action}</div>
        <div className='underline'></div>
        <div className='inputs'>
          {action==="Logar"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Nome' />
          </div>}
          
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email' />
          </div>
          <div className="input">
            <img src={senha_icon} alt="" />
            <input type="password" placeholder='Senha' />
          </div>
        </div>
      </div>
      {action==="Criar conta"?<div></div>:<div className="esqueciSenha">Esqueceu sua senha? <span>Clique aqui!</span></div>}
      <div className="submit-container">
        <div className={action==="Logar"?"submit gray":"submit"} onClick={()=>{setAction("Criar conta")}}>Criar conta</div>
        <div className={action==="Criar conta"?"submit gray":"submit"} onClick={()=>{setAction("Logar")}}>Logar</div>
      </div>
    </div>
  </div>
  )
}

export default LoginESignup
