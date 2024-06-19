import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Funcionario = () => {
  const [funcionarios, setFuncionarios] = useState([]);
 

  useEffect(() => {
    buscarSetores();
  }, []);

  const buscarSetores = () => {
    fetch("http://localhost:8080/usuarios/all")
      .then(resposta => resposta.json())
      .then(dados => {
        setFuncionarios(dados);
      });
  };

  

  const deletarSetores = (id) => {
    fetch(`http://localhost:8080/usuarios/${id}`, {
      method: 'DELETE'
    })
      .then(resposta => {
        if (resposta.ok) {
          buscarSetores();
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
    <div className='container-setor'>
      <h1>Funcionários</h1>
      <Link to={`/Sistema/cadastro-setor/`}>
        <button>+ Novo funcionário</button>
      </Link>
      <hr />
      <br />
      <table className="customers">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Função</th>
            <th>Loja</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((funcionario) => (
            <tr key={funcionario.id}>
              <td>{funcionario.nome}</td>
              <td>{funcionario.nomeCargo}</td>
              <td>{funcionario.lojaCadastro}</td>
              <td>
                <Link to={`/Sistema/editar-setor/${funcionario.nomeCargo}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deletarSetores(funcionario.idCargo)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={`/Sistema/Cadastros/`}>
        <button>Voltar</button>
      </Link>
    </div>
  );
}

export default Funcionario;