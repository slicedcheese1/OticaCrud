import React from 'react'
import { Link } from 'react-router-dom'



const Setor = () => {
    return (
        <>
            <div className ='container-setor'>
                     <h1>Setor</h1> 
                     <button>Novo setor</button>
                     <hr/>


                     <table className="customers">
          <thead>
            <tr>
              <th>Cargo</th>
              <th>Atividade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <td>Vendedor</td>
                <td>ATIVO</td>
              
                <td>
                <Link to={`/Sistema/ClienteBusca/`}>
                <button>Editar</button>
               </Link>
                <button>Excluir</button> 
                </td>
              </tr>
            
          </tbody>
        </table>
            </div>
        </>
    )
}

export default Setor
