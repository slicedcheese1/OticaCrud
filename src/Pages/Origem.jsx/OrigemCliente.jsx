import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button"
import TableSearch from '../../Componentes/Busca/TableSearch';

const OrigemCliente = () => {

  return (
    <>
    <div className="d-flex w-100 justify-content-between">
      <h1>Origem dos Clientes</h1>
      <Link to={`/Sistema/cadastrar-origem-cliente/`}>
        <Button>Nova Origem</Button>
      </Link>
    </div>
      <hr/>
      <TableSearch 
      routeSearch={"http://localhost:8080/origem_cliente/all"}
      routeDeleteNoId={"http://localhost:8080/origem_cliente/"}
      idLabel={"id"}
      namePage={"Origem dos Clientes"}
      nameEntity={"origem-cliente"}
      columnNames={["nome"]}
      searchPlaceholder={"Instagram, Facebook, WhatsApp..."}
      
      />
    </>
  )
}

export default OrigemCliente
