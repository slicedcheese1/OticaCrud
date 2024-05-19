import React from 'react'
import './CadastroUsuarioRegistro.css'

const CadastroUsuarioRegistro= () => {
  return (
    <div>
       <form>
        <h3>Cadastro de Usuário</h3>
        <hr/>
        <br/>
        <div className='div-cadastro-usuario'>

        <label>Nome
        <input type = "text"/>
        </label>

        <label>E-mail
          <input type ="text"/>
        </label>

        <label>Senha
          <input type ="password"/>
        </label>

        <label>Confirmação de senha
          <input type ="password"/>
        </label>

        <label>Limite de desconto
          <input type ="text"/>
        </label>

        <label>Baixa em crediário
          <input type ="text"/>
        </label>

        <label>Permissões de acesso
          <input type ="text"/>
        </label>
        
        </div>
        
       </form>
    </div>
  )
}

export default CadastroUsuarioRegistro
