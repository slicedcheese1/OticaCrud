import React, { useState } from 'react'
import './TabelaClientes.css'





class ClienteBusca extends React.Component{


  
    constructor(props){
      super(props);
      this.state = {
        clientes: [ ]
      }
    }

componentDidMount(){
   this.buscarCliente();
}

componentWillUnmount(){
}

buscarCliente = () => {
  fetch("http://localhost:8080/clientes/pf")
   .then(resposta => resposta.json())
   .then(dados => {
    this.setState({clientes : dados})
   })
}

deletarCliente(id){
  
  fetch("http://localhost:8080/clientes/pf/"+id, {
    method: 'DELETE'})
  .then(resposta =>{
    if(resposta.ok){
      this.buscarCliente();
    }
  })
}






  render() { 

    
    return (
      
      <>


      
      <div className = "buscas">
      <h1> Busca de clientes</h1>
      <label>Buscar um cliente</label>
     <input type ="text"></input>

      </div>
      <div>

        <table className="customers">
      <thead>
        <tr>
          
          <th>Nome</th>
          <th>CPF</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {
          this.state.clientes.map((cliente) =>
            <tr>
            <td>{cliente.nome}</td>
          <td>{cliente.cpf}</td>
          <td>
          <button>Editar</button>
          <button onClick = {()=>this.deletarCliente(cliente.idCliente)}>Excluir</button>
          </td>
          </tr>
          )
        }
  
        
      </tbody>
    </table>
      </div>
      </>

    )
  }

}

export default ClienteBusca

