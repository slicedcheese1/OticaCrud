import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Setor = () => {
  const [setores, setSetores] = useState([]);
 

  useEffect(() => {
    buscarSetores();
  }, []);

  const buscarSetores = () => {
    fetch("http://localhost:8080/cargo/all")
      .then(resposta => resposta.json())
      .then(dados => {
        setSetores(dados);
      });
  };

  

  const deletarSetores = (id) => {
    fetch(`http://localhost:8080/cargo/${id}`, {
      method: 'DELETE'
    })
      .then(resposta => {
        if (resposta.ok) {
          buscarSetores();
        }
      });
  };

 return (
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
          {setores.map((setor) => (
            <tr key={setor.idCargo}>
              <td>{setor.nomeCargo}</td>
              <td>
                <Link to={`/Sistema/editar-setor/${setor.idCargo}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deletarSetores(setor.idCargo)}>Excluir</button>
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

export default Setor;
