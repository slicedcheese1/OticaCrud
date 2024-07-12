import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const CadastroOrigemCliente = () => {

    const navigate = useNavigate();
    const [nome, setNome] = useState("")
    const [atividade, setAtividade] = useState(true)
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

        const origem = JSON.stringify({nome, atividade})
        console.table(origem)
        
        fetch('http://localhost:8080/origem_cliente', {
          //mode: 'no-cors',
          method: 'POST',
          body: origem,
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
            className='input'
            placeholder='Instagram, facebook, WhatsApp..'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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