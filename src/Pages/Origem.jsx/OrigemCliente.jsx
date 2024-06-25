import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../Componentes/Pagination/Pagination';
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

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
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h1>Origem do cliente</h1>
        <div className="d-flex gap-1 align-items-center">
          <Link to={`/Sistema/Cadastros/`}>
                <Button variant='secondary'> Voltar </Button>
          </Link>
          <Link to={`/Sistema/cadastro-origem-cliente/`}>
            <Button>+ Nova Origem</Button>
          </Link>
        </div>
      </div>

      <hr />
      <br />

      <div className="formContainer">
        <Table striped bordered hover size="sm" >
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
        </Table>
      </div>

      <Pagination />
      <Link to={`/Sistema/Cadastros/`}>
        <button>Voltar</button>
      </Link>
      
    </div>
    </>
  )
}

export default OrigemCliente
