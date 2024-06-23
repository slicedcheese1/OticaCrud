import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CadastroOrigemCliente = () => {

    const [nomeOrigem, setNomeOrigem] = useState("")
    const [atividade, setAtividade] = useState(true)
    const [erroNome, setErroNome] = useState(false)

    const validarCampoNome = (nomeOrigem) => {
        const nomeValue = nomeOrigem;
        console.log("nome: ", nomeValue)
        if (!nomeOrigem) {
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
        
        fetch('http://localhost:8080/origem_cliente', {
          //mode: 'no-cors',
          method: 'POST',
          body: JSON.stringify({
            nomeOrigem,
            atividade
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
            <h1>Nova Origem</h1>
            <hr />
            <label>Nome</label>
            <input
            placeholder='Instagram, facebook..'
            value={nomeOrigem}
            onChange={(e) => setNomeOrigem(e.target.value)}
            onBlur={(e) => {validarCampoNome(e.target.value)}}
            />
            {erroNome && <span style={{ color: 'red' }}>Digite o nome da origem.</span>}

            <Link to={`/Sistema/origem-cliente/`}>
                <button>Voltar</button>
            </Link>

            <button
            onClick={handleSalvar}
            >Salvar</button>


        </div>
    )
}

export default CadastroOrigemCliente