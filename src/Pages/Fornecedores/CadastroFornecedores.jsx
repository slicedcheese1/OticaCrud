import { React, useState } from "react"

import Form from 'react-bootstrap/Form';


function CadastroFornecedor() {

    // {
    //     "id": 0,
    //     "cpf": "23640486914",
    //     "cnpj": "33751472605233",
    //     "nomeFantasia": "string",
    //     "razaoSocial": "string",
    //     "laboratorio": true,
    //     "cep": "string",
    //     "endereco": "string",
    //     "numero": "string",
    //     "complemento": "string",
    //     "bairro": "string",
    //     "email": "string",
    //     "website": "string",
    //     "inscricaoEstadual": "string",
    //     "inscricaoMunicipal": "string",
    //     "suframa": "string",
    //     "contribuinteICMS": true,
    //     "observacoes": "string",
    //     "telefone": "string"
    //   }

    const [cpf, setCpf] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [nomeFantasia, setNomeFantasia] = useState("")
    const [razaoSocial, setRazaoSocial] = useState("")
    const [laboratorio, setLaboratorio] = useState(false)
    const [cep, setCep] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [bairro, setBairro] = useState("")
    const [email, setEmail] = useState("")
    const [website, setWebsite] = useState("")
    const [inscricaoEstadual, setInscricaoEstadual] = useState("")
    const [inscricaoMunicipal, setInscricaoMunicipal] = useState("")
    const [suframa, setSuframa] = useState("")
    const [contribuinteICMS, setContribuinteICMS] = useState(false)
    const [observacoes, setObservacoes] = useState("")
    const [telefone, setTelefone] = useState("")

    function saveFornecedor(e){
        e.preventDefault()

        const fornecedor = JSON.stringify({
            cpf,
            cnpj,
            nomeFantasia,
            razaoSocial,
            laboratorio,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            email,
            website,
            inscricaoEstadual,
            inscricaoMunicipal,
            suframa,
            contribuinteICMS,
            observacoes,
            telefone,
        })

        console.log(fornecedor)

        fetch('http://localhost:8080/fornecedor', {
            //mode: 'no-cors',
            method: 'POST',
            body: fornecedor,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then((response) => {
              console.log('Fornecedor criado com sucesso:', response);
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
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Cpf</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Insita o cpf do fornecedor" 
                    value={cpf}
                    onChange={(e) => {setCpf(e.target.value)}}
                  />
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>cnpj</Form.Label>
                  <Form.Control 
                    name="cnpj"
                    type='text' 
                    placeholder='Insira o cnpj'
                    value={cnpj}
                    onChange={(e) => {setCnpj(e.target.value)}}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>nomeFantasia</Form.Label>
                  <Form.Control
                    name="nomeFantasia"
                    type='text' 
                    placeholder='nomeFantasia'
                    value={nomeFantasia}
                    onChange={(e) => {setNomeFantasia(e.target.value)}}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>razaoSocial</Form.Label>
                  <Form.Control 
                    name="razaoSocial"
                    type='text' 
                    placeholder='razaoSocial'
                    value={razaoSocial}
                    onChange={(e) => {setRazaoSocial(e.target.value)}}
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
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                            name="endereco"
                            type="text"
                            placeholder="Endereço"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
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
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Website</Form.Label>
                        <Form.Control
                            name="website"
                            type="text"
                            placeholder="Website"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Inscrição Estadual</Form.Label>
                        <Form.Control
                            name="inscricaoEstadual"
                            type="text"
                            placeholder="Inscrição Estadual"
                            value={inscricaoEstadual}
                            onChange={(e) => setInscricaoEstadual(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Inscrição Municipal</Form.Label>
                        <Form.Control
                            name="inscricaoMunicipal"
                            type="text"
                            placeholder="Inscrição Municipal"
                            value={inscricaoMunicipal}
                            onChange={(e) => setInscricaoMunicipal(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Suframa</Form.Label>
                        <Form.Control
                            name="suframa"
                            type="text"
                            placeholder="Suframa"
                            value={suframa}
                            onChange={(e) => setSuframa(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contribuinte ICMS</Form.Label>
                        <Form.Check
                            type="checkbox"
                            label="Contribuinte ICMS?"
                            checked={contribuinteICMS}
                            onChange={(e) => setContribuinteICMS(e.target.checked)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Observações</Form.Label>
                        <Form.Control
                            name="observacoes"
                            type="text"
                            placeholder="Observações"
                            value={observacoes}
                            onChange={(e) => setObservacoes(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control
                            name="telefone"
                            type="text"
                            placeholder="Telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </Form.Group>
            </div>
            <button
            onClick={(e) => saveFornecedor(e)}>Cadastrar</button>

            <div className='container-dados-usuario'>
            
            </div>
        </form>
      </>
    )
}

export default CadastroFornecedor

