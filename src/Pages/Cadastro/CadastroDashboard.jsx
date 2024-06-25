import React from 'react'
import CadastroBotoes from '../../Componentes/Cadastro/CadastroDashboard/CadastroBotoes'

const CadastroDashboard = () => {
  return (
      <>
        <div className="formContainer">
          <div className="card-main">
            <h2>Cadastros</h2>
            <hr/>
            <CadastroBotoes/>
          </div>
        </div>
      </>
  )
}

export default CadastroDashboard