import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const EditarOrigemCliente = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [nomeOrigem, setNomeOrigem] = useState("")
    const [atividade, setAtividade] = useState(true)
    const [erroNome, setErroNome] = useState(false)

    // carregando dados
    useEffect(() => {
      fetch(`http://localhost:8080/origem_cliente/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(resp => resp.json())
        .then((data) => {
          setNomeOrigem(data.nomeOrigem);
          setAtividade(data.atividade);
        })
        .catch((err) => console.log(err));
    }, [id]);

    const validarCampoNome = (nomeOrigem) => {
        const nomeValue = nomeOrigem;
        console.log("nome: ", nomeValue)
        if (!nomeOrigem) {
          setErroNome(true)
        } else {
          setErroNome(false)
        }
      };

    const editarOrigem = (e) => {
        e.preventDefault();
    
        if (erroNome) {
          return
        }   
        
        fetch(`http://localhost:8080/origem_cliente/${id}`, {
          //mode: 'no-cors',
          method: 'PUT',
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
            console.log('Origem editada com sucesso:', data);
            navigate("/Sistema/origem-cliente/")

          })
          .catch((error) => {
            console.error('Erro ao editar origem post:', error);
          });
      };

    return (
        <div className='formContainer'>
            <h1>Editar Origem</h1>
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
            <Button onClick={editarOrigem}>Salvar</Button>

            <Link to={`/Sistema/origem-cliente/`}>
                <Button variant='secondary'>Voltar</Button>
            </Link>

            </div>
        </div>
    )
}

export default EditarOrigemCliente