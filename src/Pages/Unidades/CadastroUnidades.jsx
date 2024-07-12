import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CadastroUnidades = () => {

    const [nome, setNomeUnidade] = useState("")
    const [erroNome, setErroNome] = useState(false)

    const validarCampoNome = (nome) => {
        const nomeValue = nome;
        console.log("nome: ", nomeValue)
        if (!nome) {
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
        
        fetch('http://localhost:8080/unidade', {
          //mode: 'no-cors',
          method: 'POST',
          body: JSON.stringify({
            nome
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
            <h1>Nova unidade</h1>
            <hr />
            <label>Nome da unidade</label>
            <input
            value={nome}
            onChange={(e) => setNomeUnidade(e.target.value)}
            onBlur={(e) => {validarCampoNome(e.target.value)}}
            />
            {erroNome &&  <span className='text-danger mt-0 ms-1'>Digite o nome da Cargo.</span>}
            {!erroNome && <br/>}

            <Link to={`/Sistema/unidades/`}>
                <button>Voltar</button>
            </Link>

            <button
            onClick={handleSalvar}
            >Salvar</button>


        </div>
    )
}

export default CadastroUnidades