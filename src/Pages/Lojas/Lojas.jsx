import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TableSearch from '../../Componentes/Busca/TableSearch';
import { Button } from 'react-bootstrap';

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
  
    
  
    const deletarLojas = (id) => {
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
  

  return (
    <> 
    <div className="d-flex w-100 justify-content-between">
      <h1>Lojas</h1>
      <Link to={`/Sistema/cadastro-loja/`}>
        <Button>+ Nova loja</Button>
      </Link>
    </div>

      <hr/>

      <TableSearch 
      routeSearch={"http://localhost:8080/loja/all"}
      routeDeleteNoId={"http://localhost:8080/loja/"}
      idLabel={"id"}
      namePage={"Lojas"}
      nameEntity={"loja"}
      columnNames={["nomeFantasia", "cep", "cidade"]}
      searchPlaceholder={"Digite o nome, cep..."}
      />
    </>
  )
}

export default Lojas
