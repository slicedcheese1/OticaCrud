import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../Componentes/Pagination/Pagination';
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

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
        
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h1>Grifes</h1>
        <div className="d-flex gap-1 align-items-center">
          <Link to={`/Sistema/Cadastros/`}>
            <Button variant='secondary'> Voltar </Button>
          </Link>
          <Link to={`/Sistema/cadastro-grifes/`}>
            <Button>+ Nova grife</Button>
          </Link>
        </div>
      </div>
      <hr />
      
      <br />

      <div className="formContainer">
        <Table striped bordered hover size="sm" >
          <thead>
            <tr>
              <th class="w-75">Nome</th>
              <th class="w-25">Ações</th>
            </tr>
          </thead>
          <tbody>
            {grifes.map((grife) => (
              <tr key={grife.idGrife}>
                <td>{grife.nome}</td>
                <td>
                  <div className="w-100 d-flex flex-row-reverse gap-2">
                    <Link to={`/Sistema/editar-grifes/${grife.idGrife}`}>
                      <button>Editar</button>
                    </Link>
                    <button onClick={() => deletarGrifes(grife.idGrife)}>Excluir</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Pagination />
      
      
    </div>
    </div>
    </>
  )
}

export default Grifes
