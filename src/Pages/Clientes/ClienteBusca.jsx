import TableSearch from '../../Componentes/Busca/TableSearch';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ClienteBusca = () => {

  return (
    <>
    <div className="d-flex w-100 justify-content-between">
      <h1>Clientes</h1>
      <Link to={`/Sistema/cadastrar-cliente/`}>
        <Button>Novo Cliente</Button>
      </Link>
    </div>
      <hr/>
      <TableSearch 
      routeSearch={"http://localhost:8080/clientes/pf"}
      routeDeleteNoId={"http://localhost:8080/clientes/pf/"}
      idLabel={"idCliente"}
      namePage={"Clientes"}
      />
    </>
  );
};

export default ClienteBusca;
