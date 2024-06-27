import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TabelaClientes.css'

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
        console.log("clientes: ", clientes)
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
    
      <div className="container my-5">
        <div className="row">
          <table id="clientes" className="table table-stripped" style={{width:"100%"}}>
              <caption>Exemplo de dataTable</caption>
              <thead>
                  <tr>
                      <th>Nome</th>
                      <th>Cpf</th>
                      <th>Data de Nascimento</th>
                      <th>Ações</th>
                  </tr>
              </thead>
              <tbody>

                <tr>
                  <td>italo</td>
                  <td>123</td>
                  <td>24/05/2004</td>
                  <td className='d-flex gap-2'>
                    <button className="btn btn-sm btn-primary"><i className="fa-solid fa-square-pen"></i></button>
                    <button className="btn btn-sm btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                  </td>
                </tr>
                
                {clientes.map((cliente) => {
                  <tr key={cliente.idCliente}>
                    <td>{cliente.nome}</td>
                    <td>{cliente.cpf}</td>
                    <td>{cliente.dataNascimento}</td>
                    <td className='d-flex gap-2'>
                      <button className="btn btn-sm btn-primary"><i className="fa-solid fa-square-pen"></i></button>
                      <button className="btn btn-sm btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                    </td>
                  </tr>
                })}
              </tbody>
          </table>
        </div>
      </div>
      <h1>Clientes</h1>
      {clientes.map((cliente) => {
                  <h1>oi</h1>
      })}
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
