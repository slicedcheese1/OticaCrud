import React from 'react'
import { useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const CadastroLoja = () => {

  // {
  //   "idLoja": 0,
  //   "cpf": "string",
  //   "cnpj": "string",
  //   "razaoSocial": "string",
  //   "nomeFantasia": "string",
  //   "identificacaoEmpresa": "string",
  //   "telefonePrincipal": "+55916257324103328",
  //   "telefoneSecundario": "+6587709284999883",
  //   "nomeContato": "string",
  //   "email": "string",
  //   "cep": "98015-304",
  //   "numero": 0,
  //   "bairro": "string",
  //   "complemento": "string",
  //   "cidade": "string"
  // }

  const [cpf, setCpf] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [razaoSocial, setRazaoSocial] = useState("")
  const [nomeFantasia, setNomeFantasia] = useState("")
  const [identificacaoEmpresa, setIdentificacaoEmpresa] = useState("")
  const [telefonePrincipal, setTelefonePrincipal] = useState("")
  const [telefoneSecundario, setTelefoneSecundario] = useState("")
  const [nomeContato, setNomeContato] = useState("")
  const [email, setEmail] = useState("")
  const [cep, setCep] = useState("")
  const [numero, setNumero] = useState("")
  const [bairro, setBairro] = useState("")
  const [complemento, setComplemento] = useState("")
  const [cidade, setCidade] = useState("")
  

  function saveLoja(e){
      e.preventDefault()

      const loja = JSON.stringify({
        cpf,
        cnpj,
        razaoSocial,
        nomeFantasia,
        identificacaoEmpresa,
        telefonePrincipal,
        telefoneSecundario,
        nomeContato,
        email,
        cep,
        numero,
        bairro,
        complemento,
        cidade
      })

      console.log(loja)

      fetch('http://localhost:8080/loja', {
          //mode: 'no-cors',
          method: 'POST',
          body: loja,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then((response) => {
            console.log('Fornecedor criado com sucesso:', response);
          })
          .catch((message) => {
            console.error('Erro ao criar post:', message, message.message);
          });
  }

  return(
    <>
      <div>
          <h2>Nova Loja</h2>
          <hr/>
          <Form>

            <Form.Group>
              <Form.Label>Nome de contato</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Insita o nome da loja" 
                value={nomeContato}
                onChange={(e) => {setNomeContato(e.target.value)}}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>email de contato</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Insita o email da loja" 
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>CPF</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Insita o cpf do fornecedor" 
                value={cpf}
                onChange={(e) => {setCpf(e.target.value)}}
              />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>CNPJ</Form.Label>
              <Form.Control 
                name="cnpj"
                type='text' 
                placeholder='Insira o cnpj'
                value={cnpj}
                onChange={(e) => {setCnpj(e.target.value)}}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Identifcação da loja no sistema</Form.Label>
              <Form.Control
                  name="identificacaoEmpresa"
                  type="text"
                  placeholder="identificacaoEmpresa"
                  value={identificacaoEmpresa}
                  onChange={(e) => setIdentificacaoEmpresa(e.target.value)}
              />
            </Form.Group>
                

            <Form.Group>
              <Form.Label>Nome Fantasia</Form.Label>
              <Form.Control
                name="nomeFantasia"
                type='text' 
                placeholder='nomeFantasia'
                value={nomeFantasia}
                onChange={(e) => {setNomeFantasia(e.target.value)}}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Razão Social</Form.Label>
              <Form.Control 
                name="razaoSocial"
                type='text' 
                
                value={razaoSocial}
                onChange={(e) => {setRazaoSocial(e.target.value)}}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Telefone Principal</Form.Label>
              <Form.Control
                  name="bairro"
                  type="text"
                  placeholder=""
                  value={telefonePrincipal}
                  onChange={(e) => setTelefonePrincipal(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
                <Form.Label>Telefone Secundário</Form.Label>
                <Form.Control
                    name="bairro"
                    type="text"
                    placeholder="Bairro"
                    value={telefoneSecundario}
                    onChange={(e) => setTelefoneSecundario(e.target.value)}
                />
            </Form.Group>
                
                

            <Form.Group>
              <Form.Label>CEP</Form.Label>
              <Form.Control
                  name="cep"
                  type="text"
                  placeholder="CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
              />
            </Form.Group>

                

            <Form.Group>
              <Form.Label>Número</Form.Label>
              <Form.Control
                  name="numero"
                  type="text"
                  placeholder="Número"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Complemento</Form.Label>
              <Form.Control
                  name="complemento"
                  type="text"
                  placeholder="Complemento"
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                  name="bairro"
                  type="text"
                  placeholder="Bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                name="Cidade"
                type='text' 
                value={cidade}
                onChange={(e) => {setCidade(e.target.value)}}
              />
            </Form.Group>
          </Form>
      </div>
      <Button onClick={(e) => saveLoja(e)}>Cadastrar</Button>

      <div className='container-dados-usuario'>
      </div>
    </>
  )
}

export default CadastroLoja
