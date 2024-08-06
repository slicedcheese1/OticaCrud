import  { useState, useContext  } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import MessageContext from '../../Context/MessageContext';

const CadastroOrigemCliente = () => {

    const navigate = useNavigate();
    const [nome, setNome] = useState("")
    const atividade = true
    const [erroNome, setErroNome] = useState(false)

    const { successMessage, errorMessage } = useContext(MessageContext);

    const validarCampoNome = (nome) => {
      const erro = nome === "";
      setErroNome(erro);
      return erro;
    };

    const SalvarOrigemDoCliente = (e) => {
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

        const origem = JSON.stringify({nome, atividade})
        
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
            setNome("");
            successMessage("Origem criada com sucesso!")
            navigate("/Sistema/origem-cliente/")

          })
          .catch((error) => {
            console.error('Erro ao criar post:', error);
            errorMessage('Não foi possível cria a origem.')
          });
      };

    return (
        <div className='formContainer'>
            <h1>Nova Origem</h1>
            <hr />
            <div>
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
            {erroNome &&  <span className='text-danger mt-0 ms-1'>Digite o nome da Origem.</span>}
            {!erroNome && <br/>}
            </div>
            <div className="d-flex gap-1 flex-row-reverse ml-auto w-100">
            <Button variant='primary' onClick={SalvarOrigemDoCliente}>Salvar</Button>

            <Link to={`/Sistema/origem-cliente/`}>
                <Button variant='secondary'>Voltar</Button>
            </Link>
            </div>

        </div>
    )
}

export default CadastroOrigemCliente