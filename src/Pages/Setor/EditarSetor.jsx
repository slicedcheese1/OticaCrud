import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const EditarSetor = () => {

  const { id } = useParams();
  const [nomeCargo, setNomeCargo] = useState("")
  const [erroNome, setErroNome] = useState(false)

  // Carregar dados do cargo
  useState(() => {
    fetch(`http://localhost:8080/cargo/${id}`, {
      method: 'GET'
    })
    .then(resposta => resposta.json())
    .then(dados => {
      setNomeCargo(dados.nomeCargo)
    })
    .catch((error) => {
      console.error('Erro ao buscar cargo:', error);
    });
  }, []
  )

  const editCargo = (e) => {
      e.preventDefault();
  
      if (erroNome) {
        return
      }   

      console.log(JSON.stringify({nomeCargo}), id)
      
      fetch(`http://localhost:8080/cargo/${id}`, {
        method: 'PUT',
        body: JSON.stringify({nomeCargo}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((data) => {
          console.log('Cargo editado com sucesso:', data);
        })
        .catch((error) => {
          console.error('Erro ao editar cargo:', error);
        });
    };

    const validarCampoNome = (nome) => {
      console.log("nome: ", nome)
      setErroNome(nome === "")
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
          {erroNome &&  <span className='text-danger mt-0 ms-1'>Digite o nome da Cargo.</span>}
          {!erroNome && <br/>}

          <Link to={`/Sistema/setor/`}>
              <button>Voltar</button>
          </Link>

          <button
          onClick={(e) => editCargo(e)}
          >Salvar</button>


      </div>
  )
}

export default EditarSetor
