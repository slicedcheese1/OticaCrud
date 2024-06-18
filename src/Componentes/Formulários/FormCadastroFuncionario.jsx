import React from 'react'
import { Form } from 'react-router-dom'
import { useState, useEffect } from 'react';

const FormCadastroFuncionario = () => {



  return (
    <>
    <div>
       <Form >
        <div className='container-dados-pessoais-funcionario'>
        <h2>Dados pessoais </h2>
       
        <hr/>
         <label>Nome</label>
         <input type='text' placeholder='Nome do funcionário'/>
         <label htmlFor="lojas">Loja</label>
                <select name="Selecione em qual loja será cadastrado seu novo funcionário" >
         
                </select>

                <label htmlFor="funcoes">Função</label>
                <select name="Selecione a função do seu novo funcionário" >
                {options.map(option => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
                  
                </select>

          <label>CEP</label>
         <input type='text' placeholder='CPF'/> 

         <label>RG</label>
         <input type='text' placeholder='RG'/> 
         <br/>
         <br/> 
         </div>

         <div className='container-dados-endereço-funcionario'>
         <h2>Dados de endereço </h2>
         <hr/>
         <label>CEP</label>
         <input type='text' placeholder='CEP'/> 

         <label>Endereço</label>
         <input type='text' placeholder='Endereço'/> 

         <label>Bairro</label>
         <input type='text' placeholder='Bairro'/> 

         <label>Cidade</label>
         <input type='text' placeholder='Cidade'/> 

         </div>
         <button>Cadastrar</button>

         <div className='container-dados-usuario'>
          
         </div>
       </Form>
    </div>
    <br/>
    <br/>
    <button>Voltar</button>
    
    </>
  )
}

export default FormCadastroFuncionario
