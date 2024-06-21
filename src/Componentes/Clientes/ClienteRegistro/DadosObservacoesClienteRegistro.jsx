import React from 'react'
import styles from './DadosPessoaisClienteRegistro.module.css'
import Card from "react-bootstrap/Card"
const DadosObservacoesClienteRegistro = () => {
  return (
       <>
      
      <Card className="p-4">
        <h3>Observações</h3>
        <hr />
        <div id="form-observacao" className={styles.formBox} method="post">
            <textarea className ={styles.textao}></textarea>
        </div>
      
      </Card>
      </>
    
  )
}

export default DadosObservacoesClienteRegistro
