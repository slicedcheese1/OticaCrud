
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ClienteUpdate = () => {
  const { id } = useParams();
  
  const [cliente, setCliente] = useState(null);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/clientes/pf/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then((data) => {-
        setCliente(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function toggleProjectForm(){
    setShowProjectForm(!showProjectForm)
  }

  return (
    <>

      <div>
        <p>Formulario ja preenchido</p>
      </div>
   
      <div>
        <h3>Detalhes do Cliente</h3>
        <hr/>
        <br/>
        <p>
          <span>Cliente: {cliente.nome}</span>
        </p>
        <p>
        <span>CPF: {cliente.cpf}</span>
        </p>
        <p>
        <span>RG: {cliente.rg}</span>
        </p>
        <p>
        <span>Sexo: {cliente.sexo}</span>
        </p>
        <p>
        <span>Cadastrado em: {cliente.lojaCadastro}</span>
        </p>
        <p>
        <span>Data de nascimento: {cliente.dataNascimento}</span>
        </p>
          <p>
        <span>CEP: {cliente.cep}</span>
        </p>
        <p>
        <span>Cidade: {cliente.cidade}</span>
        </p>
        <p>
        <span>Estado: {cliente.estado}</span>
        </p>
        <p>
        <span>Rua: {cliente.rua}</span>
        </p>

        
      </div>
    </>
  );
}

export default ClienteUpdate;
