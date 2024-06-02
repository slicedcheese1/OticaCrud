import React from 'react'

const Aniversarios = () => {

  const [clientes, setClientes] = useState([]);
  
  useEffect(() => {
    buscarCliente();
  }, []);

  const buscarCliente = () => {
    fetch("http://localhost:8080/clientes/pf")
      .then(resposta => resposta.json())
      .then(dados => {
        setClientes(dados);
      });
  };

  
  return (
    <div>
      <p>{clientes.nome}</p>
    </div>
  )
}

export default Aniversarios

