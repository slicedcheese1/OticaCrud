import  { useState, useEffect, useContext  } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import MessageContext from '../../Context/MessageContext';

const EditarOrigemCliente = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [nome, setNome] = useState("")
    const [atividade, setAtividade] = useState(true)
    const [erroNome, setErroNome] = useState(false)

    const { successMessage, errorMessage } = useContext(MessageContext);

    const validarCampoNome = (nome) => {
      const erro = nome === "";
      setErroNome(erro);
      return erro;
    };

    // carregando dados
    useEffect(() => {
      fetch(`http://localhost:8080/origem_cliente/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(resp => resp.json())
        .then((data) => {
          setNome(data.nome);
          setAtividade(data.atividade);
        })
        .catch((error) => {
          console.log("Não foi possivel carregar a origem", error)
          errorMessage("Não foi possivel carregar a origem.")
        });
    }, [id]);

    const editarOrigem = (e) => {
        e.preventDefault();

        let newErros = [];

        // validação de nome da unidade
        if (erroNome) {
          newErros.push({ title: "O campo de nome precisa ser preenchido." });
        }   
  
        // exibição dos erros de validação de formulario
        if (newErros.length > 0) {
          newErros.forEach(newError => {
            errorMessage(newError.title)
          });
          return
        }

        const origem = JSON.stringify({nome, atividade})
        
        fetch(`http://localhost:8080/origem_cliente/${id}`, {
          //mode: 'no-cors',
          method: 'PUT',
          body: origem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then((data) => {
            console.log('Origem editada com sucesso:', data);
            successMessage("Origem editada com sucesso!")
            navigate("/Sistema/origem-cliente/")

          })
          .catch((error) => {
            console.error('Erro ao editar origem post:', error);
            errorMessage('Não foi possível criar a origem.')
          });
      };

    return (
        <div className='formContainer'>
            <h1>Editar Origem</h1>
            <hr />
            <div>
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control
                className='input'
                placeholder='Instagram, Facebook, WhatsApp'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onBlur={(e) => {validarCampoNome(e.target.value)}}
                />
              </Form.Group>
              {erroNome &&  <span className='text-danger mt-0 ms-1'>Digite o nome da Origem.</span>}
              {!erroNome && <br/>}
            </div>
            <div className="d-flex gap-1 flex-row-reverse ml-auto w-100">
              <Button onClick={editarOrigem}>Salvar</Button>
              <Link to={`/Sistema/origem-cliente/`}>
                  <Button variant='secondary'>Voltar</Button>
              </Link>
            </div>
        </div>
    )
}

export default EditarOrigemCliente