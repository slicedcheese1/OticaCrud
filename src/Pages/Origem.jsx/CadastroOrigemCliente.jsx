import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const CadastroOrigemCliente = () => {

    const navigate = useNavigate();
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
            navigate("/Sistema/origem-cliente/")

          })
          .catch((error) => {
            console.error('Erro ao criar post:', error);
          });
      };

    return (
        <div className='formContainer'>
            <h1>Nova Origem</h1>
            <hr />

            <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
            placeholder='Instagram, facebook..'
            value={nomeOrigem}
            onChange={(e) => setNomeOrigem(e.target.value)}
            onBlur={(e) => {validarCampoNome(e.target.value)}}
            />
            </Form.Group>
            {erroNome && <span style={{ color: 'red' }}>Digite o nome da origem.</span>}

            <div className="d-flex gap-1 flex-row-reverse ml-auto w-100">
            <Button variant='primary' onClick={handleSalvar}>Salvar</Button>

            <Link to={`/Sistema/origem-cliente/`}>
                <Button variant='secondary'>Voltar</Button>
            </Link>
            </div>

        </div>
    )
}

export default CadastroOrigemCliente