import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Message from "../../Componentes/Messages/Message";

import MessageContext from '../../Context/MessageContext';
import { ToastContainer, toast } from 'react-toastify';

const CadastroUnidade = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState(false);
  const [erros, setErros] = useState([]);

  const { messagesMain, setMessagesMain } = useContext(MessageContext);

  const success = () => {
    toast.success("Unidade criada com sucesso!")
  }

  const error = (message) => {
    toast.error(message)
  }

  const validarCampoNome = (nome) => {
    setErroNome(nome === "");
  };

  const handleSalvar = (e) => {
    e.preventDefault();

    let newErros = [];

    // validação de nome da unidade
    if (nome === "") {
      setErroNome(true);
      newErros.push({ title: "O campo de nome precisa ser preenchido.", variant: "danger", text: "O campo de nome precisa ser preenchido.", show: true });
    }

    // exibição dos erros
    if (newErros.length > 0) {
        newErros.forEach(newError => {
          error(newError.title)
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
      .then(response => {
        if (!response.ok) {
          return response.json().then(errorData => {
            throw new Error(errorData.message || 'Erro ao criar unidade.');
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log('Unidade criada com sucesso:', data);
        setMessagesMain([...messagesMain, { title: "Unidade criada com sucesso.", variant: "success", text: "Unidade criada com sucesso.", show: true }]);
        setNome("");
        success()
        navigate("/Sistema/unidades/");
      })
      .catch((error) => {
        console.error('Erro ao criar unidade:', error);
        setMessagesMain([...messagesMain, { title: error.message || 'Erro ao criar unidade.', variant: "danger", text: error.message || 'Erro ao criar unidade.', show: true }]);
      });
  };

  const handleCloseMessage = (index) => {
    setErros(erros.map((erro, i) => (i === index ? { ...erro, show: false } : erro)));
  };

  return (
    <>
      <div className='d-flex flex-column gap-2'>
        {erros.map((erro, index) => (
          <Message
            key={index}
            variant={erro.variant}
            title={erro.title}
            text={erro.text}
            showCard={erro.show}
            onClose={() => handleCloseMessage(index)}
          />
        ))}
      </div>
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
          <Button variant='primary' onClick={handleSalvar}>Salvar</Button>
          <Link to={`/Sistema/unidades/`}>
            <Button variant='secondary'>Voltar</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CadastroUnidade;
