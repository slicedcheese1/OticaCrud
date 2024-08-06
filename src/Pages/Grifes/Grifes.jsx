import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button"
import TableSearch from '../../Componentes/Busca/TableSearch';

const Grifes = () => {

  return (

    <>
    <div className="d-flex w-100 justify-content-between container">
      <h1>Grifes</h1>
      <Link to={`/Sistema/cadastrar-grife/`}>
        <Button>Nova Grife</Button>
      </Link>
    </div>
      <hr/>
      <TableSearch 
      routeSearch={"http://localhost:8080/grife/all"}
      routeDeleteNoId={"http://localhost:8080/grife/"}
      idLabel={"id"}
      namePage={"Grifes"}
      nameEntity={"grife"}
      columnNames={["nome"]}
      searchPlaceholder={"Digite o nome da grife"}
      
      />
    </>
    // <> 
    // <div>
    // <div className='container-grifes'>
        
    //   <div className="w-100 d-flex justify-content-between align-items-center">
    //     <h1>Grifes</h1>
    //     <div className="d-flex gap-1 align-items-center">
    //       <Link to={`/Sistema/Cadastros/`}>
    //         <Button variant='secondary'> Voltar </Button>
    //       </Link>
    //       <Link to={`/Sistema/cadastro-grifes/`}>
    //         <Button>+ Nova grife</Button>
    //       </Link>
    //     </div>
    //   </div>
    //   <hr />
      
    //   <br />

    //   <div className="formContainer">
    //     <Table striped bordered hover size="sm" >
    //       <thead>
    //         <tr>
    //           <th className="w-75">Nome</th>
    //           <th className="w-25">Ações</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {grifes.map((grife) => (
    //           <tr key={grife.idGrife}>
    //             <td>{grife.nome}</td>
    //             <td>
    //               <div className="w-100 d-flex flex-row-reverse gap-2">
    //                 <Link to={`/Sistema/editar-grifes/${grife.idGrife}`}>
    //                   <button>Editar</button>
    //                 </Link>
    //                 <button onClick={() => deletarGrifes(grife.idGrife)}>Excluir</button>
    //               </div>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </Table>
    //   </div>
    //   <Pagination />
      
      
    // </div>
    // </div>
    // </>
  )
}

export default Grifes
