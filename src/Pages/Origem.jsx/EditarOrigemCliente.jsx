import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from "react-bootstrap/Button"

const EditarOrigemCliente = () => {

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
          })
          .catch((error) => {
            console.error('Erro ao editar origem post:', error);
          });
      };

    return (
        <div>
            <h1>Editar Origem</h1>
            <hr />
            <label>Nome</label>
            <input
            placeholder='Instagram, facebook..'
            value={nomeOrigem}
            onChange={(e) => setNomeOrigem(e.target.value)}
            onBlur={(e) => {validarCampoNome(e.target.value)}}
            />
            {erroNome && <span style={{ color: 'red' }}>Digite o nome da origem.</span>}

            <Link to={`/Sistema/origem-cliente/`}>
                <Button>Voltar</Button>
            </Link>

            <Button
            onClick={editarOrigem}
            >Salvar</Button>


        </div>
    )
}

export default EditarOrigemCliente