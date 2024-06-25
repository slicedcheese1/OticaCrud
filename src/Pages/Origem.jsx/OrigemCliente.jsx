import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../Componentes/Pagination/Pagination';

const OrigemCliente = () => {
    const [origens, setOrigens] = useState([]);
 

    useEffect(() => {
      buscarOrigens();
    }, []);
  
    const buscarOrigens = () => {
      fetch("http://localhost:8080/origem_cliente/all")
        .then(resposta => resposta.json())
        .then(dados => {
          setOrigens(dados);
        });
    };
  
    
  
    const deletarOrigem = (id) => {
      fetch(`http://localhost:8080/origem_cliente/${id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok) {
            buscarOrigens();
            console.log(dados)
          }
        });
    };
  
    const atualizarSetores = (id) => {
      fetch(`http://localhost:8080/cargo/${id}`, {
        method: 'GET'
      })
      .then(resposta => resposta.json())
      .then(dados => {
        this.setState({ 
          id: dados.idCargo,
          nomeCargo: dados.nomeCargo
        }); 
      });
    };

  return (
    <> 
    <div>
    <div className='container-origem'>
      <h1>Origem do cliente</h1>
      <Link to={`/Sistema/cadastro-origem-cliente/`}>
        <button>+ Nova Origem</button>
      </Link>
      <hr />
      <br />
      <table className="customers">
        <thead>
          <tr>
            <th>Origem</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {origens.map((origem) => (
            <tr key={origem.idOrigem}>
              <td>{origem.nomeOrigem}</td>
              <td>
                <Link to={`/Sistema/editar-origem-cliente/${origem.idOrigem}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deletarOrigem(origem.idOrigem)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
      <Link to={`/Sistema/Cadastros/`}>
        <button>Voltar</button>
      </Link>
      
    </div>
    </div>
    </>
  )
}

export default OrigemCliente
