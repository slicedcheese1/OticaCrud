import React from 'react'
import { Form } from 'react-router-dom'

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
                    <option value="" disabled selected >Selecione uma opção</option>
                    <option value="Loja 01">Loja 01</option>
                    <option value="Loja 02">Loja 02</option>
                    <option value="Loja 03">Loja 03</option>
                    <option value="Loja 04">Loja 04</option>
                    <option value="Loja 05">Loja 05</option>
                    <option value="Loja 06">Loja 06</option>
                    <option value="Loja 07">Loja 07</option>
                    <option value="Loja 08">Loja 08</option>
                    <option value="Loja 09">Loja 09</option>
                    <option value="Loja 10">Loja 10</option>
                </select>

                <label htmlFor="funcoes">Função</label>
                <select name="Selecione a função do seu novo funcionário" >
                    <option value="" disabled selected >Selecione uma opção</option>
                    <option value="Loja 01">Agiota</option>
                    <option value="Loja 02">Pexero</option>
                    <option value="Loja 03">DEV</option>
                    <option value="Loja 04">Assaltante</option>
                    <option value="Loja 05">Aviaozinho</option>
                    <option value="Loja 06">Foguete</option>
                  
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
