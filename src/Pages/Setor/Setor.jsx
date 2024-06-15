import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'



const Setor = () => {

  const [setores, setSetores] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    buscarSetores();
  }, []);

  const buscarSetores = () => {
    fetch("http://localhost:8080/cargo/all")
      .then(resposta => resposta.json())
      .then(dados => {
        setSetores(dados);
      });
  };
  

    return (
      
        <>
        
            <div className ='container-setor'>
                     <h1>Setores</h1> 
                     <Link to={`/Sistema/cadastro-setor/`}>
                <button>Novo setor</button>
               </Link>
                     <hr/>
                     <br/>


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
        <Link to={`/Sistema/Cadastros/`}>
                <button>Voltar</button>
               </Link>
            </div>
        </>
    )
}

export default Setor
