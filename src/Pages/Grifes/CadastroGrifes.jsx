import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import MessageContext from '../../Context/MessageContext';

const CadastroGrifes = () => {
    const navigate = useNavigate();
    const [nome, setNomeGrife] = useState("")
    const [erroNome, setErroNome] = useState(false)

    const { successMessage, errorMessage } = useContext(MessageContext);

    const validarCampoNome = (nome) => {
      const erro = nome === "";
      setErroNome(erro);
      return erro;
    };
  
    const salvarGrife = (e) => {
        e.preventDefault();
    
        let newErros = [];

        // validação de nome da unidade
        if (validarCampoNome(nome)) {
          newErros.push({ title: "O campo de nome precisa ser preenchido." });
        }

        // exibição dos erros de validação de formulario
        if (newErros.length > 0) {
          newErros.forEach(newError => {
            errorMessage(newError.title)
          });
          return
        }

        const grife = JSON.stringify({nome})

        fetch('http://localhost:8080/grife', {
          //mode: 'no-cors',
          method: 'POST',
          body: grife,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then((data) => {
            console.log('Grife criada com sucesso:', data);
            successMessage("Grife criada com sucesso!")
            navigate("/Sistema/grifes/")
          })
          .catch((error) => {
            console.error('Erro ao criar grife:', error);
            errorMessage('Não foi possível criar a grife.')
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
              <Button variant='primary' onClick={salvarGrife}> Salvar </Button>

              <Link to={`/Sistema/grifes/`}>
                  <Button  variant='secondary'>Voltar</Button>
              </Link>

            </div>
            


        </div>
    )
}

export default CadastroGrifes