import TableSearch from "../Componentes/Busca/TableSearch"
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button"

const Unidades = () => {
  return (
    <>
    <div className="d-flex w-100 justify-content-between">
      <h1>Unidades</h1>
      <Link to={`/Sistema/cadastrar-unidade`}>
        <Button>Nova Unidade</Button>
      </Link>
    </div>
      <hr/>
      <TableSearch 
      routeSearch={"http://localhost:8080/unidade"}
      routeDeleteNoId={"http://localhost:8080/unidade/"}
      idLabel={"id"}
      namePage={"Unidades"}
      nameEntity={"unidade"}
      columnNames={["nome"]}
      searchPlaceholder={"Digite o nome da unidade"}
      
      />
    </>
  )
}

export default Unidades