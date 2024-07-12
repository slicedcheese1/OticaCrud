import { useState, useEffect } from 'react'
import { Link, useParams,  useNavigate } from 'react-router-dom'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const EditarCargo = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [nome, setNome] = useState("")
    const [erroNome, setErroNome] = useState(false)
    
    const validarCampoNome = (nome) => {
      nome == "" ? setErroNome(true) : setErroNome(false)
    };
      
    // carregando dados
    useEffect(() => {
      fetch(`http://localhost:8080/cargo/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(resp => resp.json())
        .then((data) => {
          setNome(data.nome);
        })
        .catch((error) => console.log("Não foi possivel carregar o cargo", error));
    }, [id, navigate]);


    const editarCargo = (e) => {
        e.preventDefault();
    
        if (erroNome) {
          return
        }   

        const grife = JSON.stringify({nome})
        console.table(grife)

        fetch(`http://localhost:8080/cargo/${id}`, {
          //mode: 'no-cors',
          method: 'PUT',
          body: grife,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then((data) => {
            console.log('Cargo editado com sucesso:', data);
            navigate("/Sistema/cargos/")
          })
          .catch((error) => {
            console.error('Erro ao editar Cargo:', error);
          });
      };

    return (
        <div className='formContainer'>
            <h1>Editar Cargo</h1>
            <hr />
            <div>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                className='input'
                placeholder='Vendedor, Gerente, Supervisor...'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onBlur={(e) => {validarCampoNome(e.target.value)}}
              />
            </Form.Group>
            {erroNome &&  <span className='text-danger mt-0 ms-1'>Digite o nome do Cargo.</span>}
            {!erroNome && <br/>}
            </div>
            <div className="d-flex gap-1 flex-row-reverse ml-auto w-100">

            <Button  onClick={editarCargo}>Salvar</Button>

            <Link to={`/Sistema/cargos/`}>
                <Button variant='secondary'>Voltar</Button>
            </Link>
            </div>

        </div>
    )
}

export default EditarCargo