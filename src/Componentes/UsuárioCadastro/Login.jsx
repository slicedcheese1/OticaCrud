import React from 'react'
import { useState } from 'react'
import './Login.css'

const Login = () => {
  return (
    <section className="coluna"> 
    <div className="container1">
        <form>
    <h1> Acessar sua conta </h1>
    <div><input 
       type = "email" 
       placeholder ="E-mail"/>
    </div>
      <div>
      <input
        type = "password" 
        placeholder ="senha"/> 
      </div>

      <div className="recall-forget">
        <label>
            <input type="checkbox"/>
                Lembre de mim
         
        </label>
      </div>

      <button>Entrar</button>
        </form>
       </div> 
       <div className ="container2">
        <h1>teste</h1>
       </div>
       </section>
       
  )
}

export default Login
