import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../Componentes/Pagination/Pagination';

const Tratamento = () => {
  const [tratamentos, setTratamentos] = useState([]);
 

  useEffect(() => {
    buscarGrifes();
  }, []);

  const buscarGrifes = () => {
    fetch("http://localhost:8080/tratamentoLente")
      .then(resposta => resposta.json())
      .then(dados => {
        setTratamentos(dados);
      });
  };

  

  const deletarTratamento = (id) => {
    fetch(`http://localhost:8080/tratamentoLente/${id}`, {
      method: 'DELETE'
    })
      .then(resposta => {
        if (resposta.ok) {
          buscarGrifes();
          console.log(dados)
        }
      });
  };

  return (
    <> 
    <div>
    <div className='container-grifes'>
      <h1>Tipos de tratamento</h1>
      <Link to={`/Sistema/cadastro-tratamento/`}>
        <button>+ Novo tratamento</button>
      </Link> 
        
      <hr />
      <br />
      <table className="customers">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tratamentos.map((tratamento) => (
            <tr key={tratamento.id}>
              <td>{tratamento.nome}</td>
              <td>
                <Link to={`/Sistema/editar-tratamento/${tratamento.nome}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deletarTratamento(tratamento.id)}>Excluir</button>
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

export default Tratamento