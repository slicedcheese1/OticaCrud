import React from 'react'
import { Form } from 'react-router-dom'

const FormCadastroSetor = () => {
  return (
    <div>
       <Form>
        <label>Nome</label>
        <input type="text" placeholder='Nome do cargo'/>
       </Form>
    </div>
  )
}

export default FormCadastroSetor
