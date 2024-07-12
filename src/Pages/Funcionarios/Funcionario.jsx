import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Funcionario = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    buscarFuncionarios();
  }, []);

  const buscarFuncionarios = () => {
    fetch("http://localhost:8080/usuarios/all")
      .then(resposta => resposta.json())
      .then(dados => {
        setFuncionarios(dados);
      });
  };

  const deletarFuncionario = (id) => {
    fetch(`http://localhost:8080/usuarios/${id}`, {
      method: 'DELETE'
    })
      .then(resposta => {
        if (resposta.ok) {
          buscarFuncionarios();
        }
      });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const lowerSearch = search.toLowerCase();

  return (
    <div className='container-setor'>
      <h1>Funcionários</h1>

      <Link to={`/Sistema/cadastro-funcionario/`}>
        <button>+ Novo funcionário</button>
      </Link>
      <input
        name='search'
        placeholder='Nome'
        value={search}
        onChange={handleSearchChange}
      />

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
          {funcionarios
            .filter(funcionario =>
              lowerSearch.trim() === '' ? true : funcionario.nome.toLowerCase().includes(lowerSearch)
            )
            .map((funcionario) => (
              <tr key={funcionario.id}>
                <td>{funcionario.nome}</td>
                <td>{funcionario.cargos[0].nomeCargo}</td>
                <td>{funcionario.loja}</td>
                <td>
                  <Link to={`/Sistema/ClienteBusca/${funcionario.id}`}>
                    <button>Editar</button>
                  </Link>
                  <button onClick={() => deletarFuncionario(funcionario.id)}>Excluir</button>
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