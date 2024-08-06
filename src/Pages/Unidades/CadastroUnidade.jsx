import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MessageContext from '../../Context/MessageContext';

const CadastroUnidade = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState(false);

  const { successMessage, errorMessage } = useContext(MessageContext);

  const validarCampoNome = (nome) => {
    setErroNome(nome === "");
  };

  const salvarUnidade = (e) => {
    e.preventDefault();

    let newErros = [];

    // validação de nome da unidade
    if (erroNome) {
      newErros.push({ title: "O campo de nome precisa ser preenchido." });
    }

    // exibição dos erros de validação de formulario
    if (newErros.length > 0) {
        newErros.forEach(newError => {
          errorMessage(newError.title)
      });
    }

    const unidade = JSON.stringify({ nome });

    fetch('http://localhost:8080/unidade', {
      method: 'POST',
      body: unidade,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((data) => {
        console.log('Unidade criada com sucesso:', data);
        setNome("");
        successMessage("Unidade criada com sucesso!")
        navigate("/Sistema/unidades/");
      })
      .catch((error) => {
        console.error('Erro ao criar unidade:', error);
        errorMessage('Não foi possível cria a unidade.')

      });
  };

  return (
    <>
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
              onBlur={(e) => { validarCampoNome(e.target.value) }}
            />
          </Form.Group>
          {erroNome && <span className='text-danger mt-0 ms-1'>Digite o nome da Unidade.</span>}
          {!erroNome && <br />}
        </div>
        <div className="d-flex gap-1 flex-row-reverse ml-auto w-100">
          <Button variant='primary' onClick={salvarUnidade}>Salvar</Button>
          <Link to={`/Sistema/unidades/`}>
            <Button variant='secondary'>Voltar</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CadastroUnidade;
