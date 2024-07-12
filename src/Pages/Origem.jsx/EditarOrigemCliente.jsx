import  { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const EditarOrigemCliente = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [nome, setNome] = useState("")
    const [atividade, setAtividade] = useState(true)
    const [erroNome, setErroNome] = useState(false)

    const validarCampoNome = (nome) => {
      if (!nome) {
        setErroNome(true)
      } else {
        setErroNome(false)
      }
    };

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
          setNome(data.nome);
          setAtividade(data.atividade);
        })
        .catch((err) => console.log(err));
    }, [id]);

    const editarOrigem = (e) => {
        e.preventDefault();
    
        if (erroNome) {
          return
        }   
        
        fetch(`http://localhost:8080/origem_cliente/${id}`, {
          //mode: 'no-cors',
          method: 'PUT',
          body: JSON.stringify({
            nome,
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
            className='input'
            placeholder='Instagram, Facebook, WhatsApp'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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