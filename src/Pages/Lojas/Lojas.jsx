import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../Componentes/Pagination/Pagination';

const Lojas = () => {
    const [lojas, setLojas] = useState([]);
 

    useEffect(() => {
      buscarLojas();
    }, []);
  
    const buscarLojas = () => {
      fetch("http://localhost:8080/loja/all")
        .then(resposta => resposta.json())
        .then(dados => {
          setLojas(dados);
        });
    };
  
    
  
    const deletarGrifes = (id) => {
      fetch(`http://localhost:8080/loja/${id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok) {
            buscarLojas();
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
    <div className='container-lojas'>
      <h1>Lojas</h1>
      <Link to={`/Sistema/cadastro-loja/`}>
        <button>+ Nova loja</button>
      </Link>
      <hr />
      <br />
      <table className="customers">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nome fantasia</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {lojas.map((loja) => (
            <tr key={loja.idLoja}>
              <td>{loja.identificacaoEmpresa}</td>
              <td>{loja.nomeFantasia}</td>
              <td>
                <Link to={`/Sistema/editar-grife/${loja.nome}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deletarLojas(loja.idGrife)}>Excluir</button>
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

export default Lojas
