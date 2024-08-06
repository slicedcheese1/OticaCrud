import { useState, useEffect, useContext } from 'react'
import { Link, useParams,  useNavigate } from 'react-router-dom'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import MessageContext from '../../Context/MessageContext';

const EditarUnidade = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState("")
  const [erroNome, setErroNome] = useState(false)

  const { successMessage, errorMessage } = useContext(MessageContext);
  
  const validarCampoNome = (nome) => {
    setErroNome(nome === "");
  };
    
  // carregando dados
  useEffect(() => {
    fetch(`http://localhost:8080/unidade/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then((data) => {
        setNome(data.nome);
      })
      .catch((error) => {
        console.log("Não foi possivel carregar a unidade", error)
        errorMessage("Não foi possivel carregar a unidade.")
      });
  }, [id, navigate]); 


  const editarUnidade = (e) => {
      e.preventDefault();

      let newErros = [];

      if (erroNome) {
        newErros.push({ title: "O campo de nome precisa ser preenchido." });
      }   

      // exibição dos erros de validação de formulario
      if (newErros.length > 0) {
        newErros.forEach(newError => {
          errorMessage(newError.title)
        });
      }

      const unidade = JSON.stringify({nome})
      console.table(unidade)

      fetch(`http://localhost:8080/unidade/${id}`, {
        //mode: 'no-cors',
        method: 'PUT',
        body: unidade,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((data) => {
          console.log('Unidade editada com sucesso:', data);
          successMessage("Unidade editada com sucesso!")
          navigate("/Sistema/unidades/")
        })
        .catch((error) => {
          console.error('Erro ao editar Unidade:', error);
          errorMessage('Não foi possível cria a unidade.')
        });
    };

  return (
      <div className='formContainer'>
          <h1>Editar Unidade</h1>
          <hr />
          <div>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              className='input'
              placeholder='Unidade1, Unidade2, Unidade3...'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              onBlur={(e) => {validarCampoNome(e.target.value)}}
            />
          </Form.Group>
          {erroNome &&  <span className='text-danger mt-0 ms-1'>Digite o nome da Unidade.</span>}
          {!erroNome && <br/>}
          </div>
          <div className="d-flex gap-1 flex-row-reverse ml-auto w-100">

          <Button  onClick={editarUnidade}>Salvar</Button>

          <Link to={`/Sistema/unidades/`}>
              <Button variant='secondary'>Voltar</Button>
          </Link>
          </div>

      </div>
  )
}

export default EditarUnidade