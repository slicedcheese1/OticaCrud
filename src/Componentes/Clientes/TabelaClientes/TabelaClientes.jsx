import React, { useState, useEffect } from 'react';
import './TabelaClientes.css';
import { Link } from 'react-router-dom';
import CardTabela from './CardTabela'; // Importando o componente CardTabela

const ClienteBusca = () => {
  const [clientes, setClientes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    buscarCliente();
  }, []);

  const buscarCliente = () => {
    fetch("http://localhost:8080/clientes/pf")
      .then(resposta => resposta.json())
      .then(dados => {
        setClientes(dados);
      });
  };

  const deletarCliente = (id) => {
    fetch(`http://localhost:8080/clientes/pf/${id}`, {
      method: 'DELETE'
    })
    .then(resposta => {
      if (resposta.ok) {
        buscarCliente();
      }
    });
  };

  const lowerSearch = search.toLowerCase();

  return (
    <>
      <h1>Clientes</h1>
      <hr></hr>
      <div className ="container-busca">
      <div className="buscas">
        <h1>Busca de clientes</h1>
        <hr />
        <br />
        <label>Buscar um cliente</label>
        <input placeholder="Procure por Nome, CPF, CNPJ" 
        type= "text" 
        onChange={(ev)=>setSearch(ev.target.value)} 
        value={search}/>
        <br />
        <br />
      </div>
      </div>
      <br/>
      <br/>
      <br />

      <div>
        <table className="customers">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {clientes.filter(cliente =>
              search.trim() === '' ? cliente : cliente.nome.toLowerCase().includes(lowerSearch)
            ).map((cliente) => (
              <tr key={cliente.idCliente}>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>
                  <Link to={`/Sistema/ClienteBusca/${cliente.idCliente}`}>
                    <button>Editar</button>
                  </Link>
                  <button onClick={() => deletarCliente(cliente.idCliente)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClienteBusca;
