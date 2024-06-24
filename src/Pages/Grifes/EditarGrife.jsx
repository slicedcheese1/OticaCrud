import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const EditarGrife = () => {

    const { id } = useParams();
    const [nome, setNomeGrife] = useState("")
    const [erroNome, setErroNome] = useState(false)

    // carregando dados
    useEffect(() => {
      fetch(`http://localhost:8080/grife/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(resp => resp.json())
        .then((data) => {
          setNomeGrife(data.nome);
        })
        .catch((error) => console.log("Não foi possivel carregar a grife", error));
    }, [id]);

    const validarCampoNome = (nomeOrigem) => {
        console.log("nome: ", nomeOrigem)
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
        
        fetch(`http://localhost:8080/grife/${id}`, {
          //mode: 'no-cors',
          method: 'PUT',
          body: JSON.stringify({
            nome,
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then((data) => {
            console.log('Grife editada com sucesso:', data);
          })
          .catch((error) => {
            console.error('Erro ao editar Grife:', error);
          });
      };

    return (
        <div className='formContainer'>
            <h1>Editar Grife</h1>
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
            {erroNome &&  <span className='text-danger mt-0 ms-1'>Digite o nome da Grife.</span>}
            {!erroNome && <br/>}
            </div>
            <div className="d-flex gap-1 flex-row-reverse ml-auto w-100">

            <Button  onClick={editarOrigem}>Salvar</Button>

            <Link to={`/Sistema/grifes/`}>
                <Button variant='secondary'>Voltar</Button>
            </Link>
            </div>

        </div>
    )
}

export default EditarGrife