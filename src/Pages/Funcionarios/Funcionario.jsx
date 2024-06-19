import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Funcionario = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [search, setSearch] = useState([]);



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

      <Link to={`/Sistema/cadastro-funcionario/`}>
        <button>+ Novo funcionário</button>
      </Link>


      {funcionarios.map((funcionario) => (
              
            <select id = {funcionario.id} name='Loja'>
            <option value="" disabled selected >Filtro por Loja</option>
            <option value="">{funcionario.nome}</option>
    
          </select>
          ))}
     
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
              <td>{funcionario.cargos.nomeCargo}</td>
              <td>{funcionario.lojaCadastro}</td>
              <td>
                <Link to={`/Sistema/editar-setor/${funcionario.nomeCargo}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deletarSetores(funcionario.id)}>Excluir</button>
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
