import React from 'react'
import './DadosPessoaisClienteRegistro.css'

const DadosObservacoesClienteRegistro = () => {
  return (
       <>
      
      <div className="card">
      <h3>Observações</h3>
        <hr />
        <div  id="form-observacao" className='formBox' method="post">
            <textarea className = "textao"></textarea>
        </div>
      
      </div>
      </>
    
  )
}

export default DadosObservacoesClienteRegistro
