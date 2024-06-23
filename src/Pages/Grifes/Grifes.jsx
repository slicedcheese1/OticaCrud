import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../Componentes/Pagination/Pagination';

const Grifes = () => {
    const [grifes, setGrifes] = useState([]);
 

    useEffect(() => {
      buscarGrifes();
    }, []);
  
    const buscarGrifes = () => {
      fetch("http://localhost:8080/grife/all")
        .then(resposta => resposta.json())
        .then(dados => {
          setGrifes(dados);
        });
    };
  
    
  
    const deletarGrifes = (id) => {
      fetch(`http://localhost:8080/grife/${id}`, {
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
          {grifes.map((grife) => (
            <tr key={grife.idGrife}>
              <td>{grife.nome}</td>
              <td>
                <Link to={`/Sistema/editar-grife/${grife.nome}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deletarGrifes(grife.idGrife)}>Excluir</button>
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
