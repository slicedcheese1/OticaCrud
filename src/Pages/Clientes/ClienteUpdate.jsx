
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ClienteUpdate = () => {
  const { id } = useParams();
  
  const [cliente, setCliente] = useState(null);

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

  return (
    <p>{cliente ? cliente.nome : 'Carregando...'}</p>
  );
}

export default ClienteUpdate;
