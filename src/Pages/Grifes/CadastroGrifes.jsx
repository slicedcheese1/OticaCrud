import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const CadastroGrifes = () => {

    const navigate = useNavigate();
    const [nome, setNomeGrife] = useState("")
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
        
        fetch('http://localhost:8080/grife', {
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
            navigate("/Sistema/grifes/")
          })
          .catch((error) => {
            console.error('Erro ao criar post:', error);
          });
      };

    return (
        <div className='formContainer'>
            <h1>Nova grife</h1>
            <hr />

            <div>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
              className='input'
              placeholder='Ray-Ban, Oakley, Tom Ford.'
              value={nome}
              onChange={(e) => setNomeGrife(e.target.value)}
              onBlur={(e) => {validarCampoNome(e.target.value)}}
              />
            </Form.Group>
            {erroNome && <span className='text-danger mt-0 ms-1'>Digite o nome da Grife.</span>}
            {!erroNome && <br/>}
            </div>

            <div className="d-flex gap-1 flex-row-reverse ml-auto w-100">
              <Button variant='primary' onClick={handleSalvar}> Salvar </Button>

              <Link to={`/Sistema/grifes/`}>
                  <Button  variant='secondary'>Voltar</Button>
              </Link>

            </div>
            


        </div>
    )
}

export default CadastroGrifes