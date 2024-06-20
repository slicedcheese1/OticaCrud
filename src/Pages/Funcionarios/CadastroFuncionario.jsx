import { React, useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

function CadastroFuncionario() {

    // {
    //     "id": 0,
    //     "nome": "string",
    //     "senha": "string",
    //     "lojaCadastro": "string",
    //     "cargos": [
    //       {
    //         "idCargo": 0,
    //         "nomeCargo": "string"
    //       }
    //     ],
    //     "rg": "string",
    //     "cpf": "string",
    //     "telefonePrimario": "string",
    //     "telefoneSecundario": "string",
    //     "cep": "string",
    //     "endereco": "string",
    //     "bairro": "string",
    //     "cidade": "string",
    //     "limiteDesconto": 0,
    //     "email": "string",
    //     "loja": "string"
    //   }

    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [lojaCadastro, setLojaCadastro] = useState("")
    const [cargo, setCargo] = useState("")
    const [cargos, setCargos] = useState([])
    const [rg, setRg] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefonePrimario, setTelefonePrimario] = useState("")
    const [telefoneSecundario, setTelefoneSecundario] = useState("")
    const [cep, setCep] = useState("")
    const [endereco, setEndereco] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [limiteDesconto, setLimiteDesconto] = useState("")
    const [email, setEmail] = useState("")
    const [loja, setLoja] = useState("")

    function addCargo(event) {
        event.preventDefault();
        setCargo(event.target.value)
        setCargos([...cargos, { idCargo: 0, nomeCargo: event.target.value}]);
    }

    function saveFuncionario(e){
        e.preventDefault()

        const funcionario = JSON.stringify({
          nome,
          senha,
          lojaCadastro,
          cargos,
          rg,
          cpf,
          telefonePrimario,
          telefoneSecundario,
          cep,
          endereco,
          bairro,
          cidade,
          limiteDesconto,
          email,
          loja,
        })

        console.log(funcionario)

        fetch('http://localhost:8080/usuarios', {
            //mode: 'no-cors',
            method: 'POST',
            body: funcionario,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then((response) => {
              console.log('Post criado com sucesso:', response);
            })
            .catch((error) => {
              console.error('Erro ao criar post:', error);
            });
    }

    return(
      <>
        <form>
            <div className='container-dados-pessoais-funcionario'>
                <h2>Dados pessoais </h2>
                <hr/>

                <Alert variant="success">
                  <Alert.Heading>Hey, nice to see you</Alert.Heading>
                  <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                  </p>
                </Alert>
                <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Insita o nome do funcionário" 
                    value={nome}
                    onChange={(e) => {setNome(e.target.value)}}
                  />
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>Loja</Form.Label>
                  <Form.Control 
                    name="loja"
                    type='text' 
                    placeholder='Insira o nome da loja'
                    value={loja}
                    onChange={(e) => {setLoja(e.target.value)}}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type='text' 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Telefone Principal</Form.Label>
                  <Form.Control
                    name="telefoneprimario"
                    type='text' 
                    placeholder='Telefone Principal'
                    value={telefonePrimario}
                    onChange={(e) => {setTelefonePrimario(e.target.value)}}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Telefone Secundário</Form.Label>
                  <Form.Control
                    name="telefonesecundario"
                    type='text' 
                    placeholder='Telefone Secundário'
                    value={telefoneSecundario}
                    onChange={(e) => {setTelefoneSecundario(e.target.value)}}
                  />  
                </Form.Group>

                <Form.Group>
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    name="senha"
                    type='password' 
                    placeholder='Senha '
                    value={senha}
                    onChange={(e) => {setSenha(e.target.value)}}
                  />  
                </Form.Group>

                <Form.Group>
                  <Form.Label>Loja</Form.Label>
                  <Form.Select 
                  name="lojas"
                  value={lojaCadastro}
                  onChange={(e) => {setLojaCadastro(e.target.value)}}
                  >
                      <option value="" disabled  >Selecione uma loja</option>
                      <option value="Loja 01">Loja 01</option>  
                      <option value="Loja 02">Loja 02</option>  
                      <option value="Loja 03">Loja 03</option>  
                      <option value="Loja 04">Loja 04</option>  
                      <option value="Loja 05">Loja 05</option>  
                      <option value="Loja 06">Loja 06</option>  
                      <option value="Loja 07">Loja 07</option>  
                      <option value="Loja 08">Loja 08</option>  
                      <option value="Loja 09">Loja 09</option>  
                      <option value="Loja 10">Loja 10</option>  
                  </Form.Select>
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>Função</Form.Label>
                  <Form.Select 
                  name="cargos"
                  value={cargo}
                  onChange={(e) => {addCargo(e)}}
                  >
                      <option value="" disabled  >Selecione um cargo</option>
                      <option value="exemplo1">cargo 1</option>  
                      <option value="exemplo2">cargo 2</option>  

                  </Form.Select >
                </Form.Group>

                <Form.Group>
                  <Form.Label>Limite de Desconto</Form.Label>
                  <Form.Select 
                  name="limitedesconto"
                  value={limiteDesconto}
                  onChange={(e) => {setLimiteDesconto(e.target.value)}}
                  >
                      <option value="" disabled  >Selecione um limite de desconto</option>
                      <option value={0.1}>10%</option>  
                      <option value={0.2}>20%</option>  
                      <option value={0.3}>30%</option>  
                      <option value={0.4}>40%</option>  
                      <option value={0.5}>50%</option>  
                      <option value={0.6}>60%</option>  
                      <option value={0.7}>70%</option>  
                      <option value={0.8}>80%</option>  
                      <option value={0.9}>90%</option>  
                      <option value={1.0}>100%</option>  
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label>CEP</Form.Label>
                  <Form.Control type='text' placeholder='CPF'/> 
                </Form.Group>

                <Form.Group>
                  <Form.Label>RG</Form.Label>
                  <Form.Control 
                  name="rg"
                  type='text' 
                  placeholder='RG'
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                  /> 
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>RG</Form.Label>
                  <Form.Control 
                  name="cpf"
                  type='text' 
                  placeholder='CPF'
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  />
                </Form.Group>

            </div>

            <div className='container-dados-endereço-funcionario'>
                <h2>Dados de endereço </h2>
                <hr/>
                <Form.Label>CEP</Form.Label>
                <Form.Control 
                name="cep"
                type='text' 
                placeholder='CEP'
                value={cep}
                onChange={(e)=>setCep(e.target.value)}
                /> 

                <Form.Label>Endereço</Form.Label>
                <Form.Control 
                name="endereco"
                type='text' 
                placeholder='Endereço'
                value={endereco}
                onChange={(e)=>setEndereco(e.target.value)}
                /> 

                <Form.Label>Bairro</Form.Label>
                <Form.Control 
                name="bairro"
                type='text' 
                placeholder='Bairro'
                value={bairro}
                onChange={(e)=>setBairro(e.target.value)}
                /> 

                <Form.Label>cidade</Form.Label>
                <Form.Control 
                name="cidade"
                type='text' 
                placeholder='cidade'
                value={cidade}
                onChange={(e)=>setCidade(e.target.value)}
                />
            </div>
            <button
            onClick={(e) => saveFuncionario(e)}
            >Cadastrar</button>

            <div className='container-dados-usuario'>
            
            </div>
        </form>
      </>
    )
}

export default CadastroFuncionario

