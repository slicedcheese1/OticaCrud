import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../Componentes/Pagination/Pagination';

const Grifes = () => {
    const [setores, setSetores] = useState([]);
 

    useEffect(() => {
      buscarGrifes();
    }, []);
  
    const buscarGrifes = () => {
      fetch("http://localhost:8080/cargo/all")
        .then(resposta => resposta.json())
        .then(dados => {
          setSetores(dados);
        });
    };
  
    
  
    const deletarSetores = (id) => {
      fetch(`http://localhost:8080/cargo/${id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok) {
            buscarGrifes();
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
    <div className='container-grifes'>
      <h1>Grifes</h1>
      <Link to={`/Sistema/cadastro-grifes/`}>
        <button>+ Nova grife</button>
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
          {setores.map((setor) => (
            <tr key={setor.idCargo}>
              <td>{setor.nomeCargo}</td>
              <td>
                <Link to={`/Sistema/editar-grife/${setor.nomeCargo}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deletarSetores(setor.idCargo)}>Excluir</button>
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

export default Grifes
