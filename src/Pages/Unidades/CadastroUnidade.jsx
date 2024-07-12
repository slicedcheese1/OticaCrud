import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const CadastroUnidade = () => {

  const navigate = useNavigate();
  const [nome, setNome] = useState("")
  const [erroNome, setErroNome] = useState(false)

  const validarCampoNome = (nome) => {
    nome == "" ? setErroNome(true) : setErroNome(false)
  };

  const handleSalvar = (e) => {
      e.preventDefault();
  
      if (erroNome) {
        return
      }   
      
      const unidade = JSON.stringify({nome})
      console.table(unidade)

      fetch('http://localhost:8080/unidade', {
        //mode: 'no-cors',
        method: 'POST',
        body: unidade,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((data) => {
          console.log('Unidade criada com sucesso:', data);
          navigate("/Sistema/unidades/")
        })
        .catch((error) => {
          console.error('Erro ao criar unidade:', error);
        });
    };

  return (
      <div className='formContainer'>
          <h1>Nova Unidade</h1>
          <hr />

          <div>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
            className='input'
            placeholder='Unidade1, Unidade2, Unidade3...'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            onBlur={(e) => {validarCampoNome(e.target.value)}}
            />
          </Form.Group>
          {erroNome && <span className='text-danger mt-0 ms-1'>Digite o nome da Unidade.</span>}
          {!erroNome && <br/>}
          </div>

          <div className="d-flex gap-1 flex-row-reverse ml-auto w-100">
            <Button variant='primary' onClick={handleSalvar}> Salvar </Button>

            <Link to={`/Sistema/unidades/`}>
                <Button  variant='secondary'>Voltar</Button>
            </Link>

          </div>
          


      </div>
  )
}


export default CadastroUnidade
