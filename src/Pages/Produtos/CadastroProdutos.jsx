import { React, useState, useEffect } from "react"

import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function CadastroProdutos() {

    const [unidades, setUnidades] = useState([]);

    useEffect(() => {
        buscarUnidades();
    }, []);

    const buscarUnidades = () => {
        fetch("http://localhost:8080/unidade")
            .then(resposta => resposta.json())
            .then(dados => {
                setUnidades(dados);
            });
    };


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
        setCargos([...cargos, { idCargo: 0, nomeCargo: event.target.value }]);
    }

    function saveFuncionario(e) {
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

    return (
        <>
            <form className="formContainer">
                <Card className='p-4'>
                    <h2>Dados do produto</h2>
                    <hr />

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Código GTIN (EAN-13)</Form.Label>
                        <Form.Control
                            className="input"
                            type="text"
                            value={nome}
                            onChange={(e) => { setNome(e.target.value) }}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Referência</Form.Label>
                        <Form.Control
                            className="input"
                            name="lojas"
                            value={lojaCadastro}
                            onChange={(e) => { setLoja(e.target.value) }}
                            type='text'
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Nome do produto</Form.Label>
                        <Form.Control
                            className="input"
                            name="email"
                            type='text'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Unidade</Form.Label>
                        <Form.Select
                            className="input"
                            name="lojas"
                            value={lojaCadastro}
                            onChange={(e) => { setLoja(e.target.value) }}
                        >
                            <option value="" disabled  >Selecione uma unidade</option>
                            {unidades.map((unidade) => (
                                <option>{unidade.nome}</option>

                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Grife</Form.Label>
                        <Form.Select
                            className="input"
                            name="lojas"
                            value={lojaCadastro}
                            onChange={(e) => { setLoja(e.target.value) }}
                        >
                            <option value="" disabled  >Selecione uma grife</option>
                            {unidades.map((unidade) => (
                                <option>{unidade.nome}</option>

                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Grupo</Form.Label>
                        <Form.Select
                            className="input"
                            name="lojas"
                            value={lojaCadastro}
                            onChange={(e) => { setLoja(e.target.value) }}
                        >
                            <option value="" disabled  >Selecione um grupo de produtos</option>
                            {unidades.map((unidade) => (
                                <option>{unidade.nome}</option>

                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fornecedor</Form.Label>
                        <Form.Select 
                        className="input"
                        name="lojas"
                        value={lojaCadastro}
                        onChange={(e) => {setLoja(e.target.value)}}
                        >
                            <option value="" disabled  >Selecione um fornecedor</option>
                            {unidades.map((unidade) => (
                            <option>{unidade.nome}</option>  
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Check
                        inline
                        label="Venda somente com O.S"
                        name="group1"
                    />

                    <Form.Check
                        inline
                        label="Controlar estoque"
                        name="group2"
                    />

                </Card>

                <Card className='p-4' >
                     <h2> Informações de preço e estoque </h2>
                     <hr />
                    <Form.Group>
                        <Form.Check
                            inline
                            label="Cadastrar o mesmo valor de custo para todas as lojas"
                            name="group2"
                        />

                        <Form.Check
                            inline
                            label="Cadastrar o mesmo preço de venda para todas as lojas"
                            name="group1"
                        />

                        <Form.Label>Custo</Form.Label>
                        <Form.Control
                            className="input"
                            name="cargos"
                            value={cargo}
                            onChange={(e) => { addCargo(e) }}
                        />
                        
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Lucro</Form.Label>
                        <Form.Control
                        className="input"
                            name="limitedesconto"
                            value={limiteDesconto}
                            onChange={(e) => { setLimiteDesconto(e.target.value) }}
                            type='text'
                        />
   
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>%Lucro</Form.Label>
                        <Form.Control className="input" type='text' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Preço de venda</Form.Label>
                        <Form.Control
                            className="input"
                            name="rg"
                            type='text'
                            value={rg}
                            onChange={(e) => setRg(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Qtd. Atual</Form.Label>
                        <Form.Control
                            className="input"
                            name="cpf"
                            type='text'
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Label>Qtd. Minima</Form.Label>
                    <Form.Control
                        className="input"
                        name="cep"
                        type='text'
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                    />

                    <Form.Label>Data de validade do produto</Form.Label>
                    <Form.Control
                        className="input"
                        name="endereco"
                        type='text'
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    />
                </Card>

                <Button onClick={(e) => saveFuncionario(e)}>Cadastrar</Button>

                <div className='container-dados-usuario'>

                </div>
            </form>
        </>
    )
}

export default CadastroProdutos
