import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'



const Setor = () => {

  const [setores, setSetores] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    buscarSetores();
  }, []);

  const buscarSetores = () => {
    fetch("http://localhost:8080/cargo/all")
      .then(resposta => resposta.json())
      .then(dados => {
        setSetores(dados);
        console.log(dados)
      });
  };

  const deletarSetores = (id) => {
    fetch(`http://localhost:8080/cargo/all/${id}`, {
      method: 'DELETE'
    })
      .then(resposta => {
        if (resposta.ok) {
          buscarSetores();
        }
      });
  };


  return (


    <>

      <div className='container-setor'>
        <h1>Setores</h1>
        <Link to={`/Sistema/cadastro-setor/`}>
          <button>Novo setor</button>
        </Link>
        <hr />
        <br />


        <table className="customers">
          <thead>
            <tr>
              <th>Cargo</th>
           
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>Vendedor</td>
              

              <td>
                <Link to={`/Sistema/ClienteBusca/`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deletarCliente(cliente.idCliente)} >Excluir</button>
              </td>
            </tr>

          </tbody>
        </table>
        <Link to={`/Sistema/Cadastros/`}>
          <button >Voltar</button>
        </Link>
      </div>
    </>
  )
}

export default Setor
