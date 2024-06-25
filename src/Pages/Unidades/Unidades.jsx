import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../Componentes/Pagination/Pagination';

const Unidades = () => {
    const [unidades, setUnidades] = useState([]);
 

    useEffect(() => {
      buscarUnidades();
    }, []);
  
    const buscarUnidades = () => {
      fetch("http://localhost:8080/unidade")
        .then(resposta => resposta.json())
        .then(dados => {
          setUnidades(dados);
        });
    };
  
    
  
    const deletarUnidades = (id) => {
      fetch(`http://localhost:8080/unidade/${id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok) {
            buscarUnidades();
            console.log(dados)
          }
        });
    };

  return (
    <> 
    <div>
    <div className='container-unidades'>
      <h1>Unidades</h1>
      <Link to={`/Sistema/cadastro-unidades/`}>
        <button>+ Nova unidade</button>
      </Link>
      <hr />
      <br />
      <table className="customers">
        <thead>
          <tr>
            <th>Nome da unidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {unidades.map((unidade) => (
            <tr key={unidade.id}>
              <td>{unidade.nome}</td>
              <td>
                <Link to={`/Sistema/editar-unidade/${unidade.nome}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deletarUnidades(unidade.id)}>Excluir</button>
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

export default Unidades