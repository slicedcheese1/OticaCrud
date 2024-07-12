import { Link } from 'react-router-dom';
import TableSearch from '../../Componentes/Busca/TableSearch';
import Button from "react-bootstrap/Button"

const Cargo = () => {


  // const buscarSetores = () => {
  //   fetch("http://localhost:8080/cargo/all")
  //     .then(resposta => resposta.json())
  //     .then(dados => {
  //       setSetores(dados);
  //     });
  // };

  

  // const deletarSetores = (id) => {
  //   fetch(`http://localhost:8080/cargo/${id}`, {
  //     method: 'DELETE'
  //   })
  //     .then(resposta => {
  //       if (resposta.ok) {
  //         buscarSetores();
  //       }
  //     });
  // };

 return (
  <>
    <div className="d-flex w-100 justify-content-between">
      <h1>Cargos</h1>
      <Link to={`/Sistema/cadastrar-cargo/`}>
        <Button>Novo Cargo</Button>
      </Link>
    </div>
      <hr/>
      <TableSearch 
      routeSearch={"http://localhost:8080/cargo/all"}
      routeDeleteNoId={"http://localhost:8080/cargo/"}
      idLabel={"id"}
      namePage={"Cargos"}
      nameEntity={"cargo"}
      columnNames={["nome"]}
      searchPlaceholder={"Digite o nome do Cargo"}
      />
    </>
    
  );
}

export default Cargo;
