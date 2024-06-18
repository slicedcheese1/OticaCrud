import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const EditarSetor = () => {

  const { id } = useParams();
  const [nomeCargo, setNomeCargo] = useState(nome)
  const [erroNome, setErroNome] = useState(false)

  useEffect(() => {
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
  })

  const validarCampoNome = (nome) => {
      const nomeValue = nome;
      console.log("nome: ", nomeValue)
      if (!nomeCargo) {
        setErroNome(true)
      } else {
        setErroNome(false)
      }
    };

  const handleSalvar = (e) => {
      e.preventDefault();
  
      if (erroNome) {
        return
      }   
      
      fetch(`http://localhost:8080/cargo/${id}`, {
        //mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify({
          nomeCargo
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((data) => {
          console.log('Post criado com sucesso:', data);
        })
        .catch((error) => {
          console.error('Erro ao criar post:', error);
        });
    };

  return (
      <div>
          <h1>Editar setor</h1>
          <hr />
          <label>Nome</label>
          <input
          placeholder='Vendedor, gerente, supervisor..'
          value={nomeCargo}
          onChange={(e) => setNomeCargo(e.target.value)}
          onBlur={(e) => {validarCampoNome(e.target.value)}}
          />
          {erroNome && <span style={{ color: 'red' }}>Digite o nome do cargo.</span>}

          <Link to={`/Sistema/setor/`}>
              <button>Voltar</button>
          </Link>

          <button
          onClick={handleSalvar}
          >Salvar</button>


      </div>
  )
}

export default EditarSetor
