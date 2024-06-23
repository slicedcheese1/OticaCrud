import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from "react-bootstrap/Button"

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
        <div>
            <h1>Editar Origem</h1>
            <hr />
            <label>Nome</label>
            <input
            placeholder='Vendedor, gerente, supervisor..'
            value={nome}
            onChange={(e) => setNomeGrife(e.target.value)}
            onBlur={(e) => {validarCampoNome(e.target.value)}}
            />
            {erroNome && <span style={{ color: 'red' }}>Digite o nome da origem.</span>}

            <Link to={`/Sistema/grifes/`}>
                <Button>Voltar</Button>
            </Link>

            <Button
            onClick={editarOrigem}
            >Salvar</Button>


        </div>
    )
}

export default EditarGrife