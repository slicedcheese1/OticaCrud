import { React, useState, useEffect } from "react"

import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function CadastroProdutos() {
    const [samePrice, setSamePrice] = useState(false)
    const [sameCoust, setSameCoust] = useState(false);
    const [unidades, setUnidades] = useState([]);
    const [grifes, setGrifes] = useState([]);
    const [grupos, setGrupos] = useState([]);
    const [fornecedores, setFornecedores] = useState([]);
    const [lojas, setLojas] = useState([]);
    const [priceValues, setPriceValues] = useState({});
    const [coustValues, setCoustValues] = useState({});

    const calculateProfit = (id) => {
        // Obtém o preço de venda e o custo para o id específico
        const sellingPrice = parseInt(priceValues[id]);
        const cost = parseInt(coustValues[id]);

        // Verifica se ambos valores existem
        if (sellingPrice !== undefined && cost !== undefined) {
            if  (!(isNaN(sellingPrice) || isNaN(cost))){

                if (cost === 0 && sellingPrice === 0) {
                    return '0'; // Se o preço de venda for zero, não há lucro
                } else {
                    // Calcula o lucro
                    const profit = sellingPrice - cost;
                    return profit;
                }
            } else {
                return ''
            }
        } else {
            console.error(`Valores não encontrados para o id: ${id}`);
            return null;
        }
    };

    const calculateProfitPercent = (id) => {
        // Obtém o preço de venda e o custo para o id específico
        const sellingPrice = parseInt(priceValues[id]);
        const cost = parseInt(coustValues[id]);

        console.log("selling: ", sellingPrice)

        // Verifica se ambos valores existem
        if (sellingPrice !== undefined && cost !== undefined) {
            
            if  (!(isNaN(sellingPrice) || isNaN(cost))){
                // Calcula o lucro
                if (cost === 0) {
                    if (sellingPrice > 0) {
                        return `${sellingPrice*100}%`; // Considera como 100% de margem de lucro se o custo for zero
                    } else if (sellingPrice === 0) {
                        return '0%'; // Se o preço de venda for zero, não há lucro
                    }

                }  else {
                    const profit = ((sellingPrice - cost)/cost)*100;
                    console.log("profit: ", profit)
                    return profit + '%';
                }
            }else {
                console.log("hi: ")
                return '';
            }
        } else {
            console.error(`Valores não encontrados para o id: ${id}`);
            return 0;
        }
    };

    const handlePriceChange = (id, value) => {
        setPriceValues(prevValues => {
            let newValues;
            if (samePrice) {
                // Se samePrice for true, atualiza todos os valores
                newValues = Object.keys(prevValues).reduce((acc, key) => {
                    acc[key] = value;
                    return acc;
                }, {});
                // Certifique-se de que todos os valores de lojas também sejam atualizados
                lojas.forEach((_, index) => {
                    newValues[index] = value;
                });
            } else {
                // Atualiza apenas o valor correspondente ao id fornecido
                newValues = {
                    ...prevValues,
                    [id]: value,
                };
            }
            console.log('Price Values:', newValues); // Verifica o tamanho e o conteúdo do objeto
            return newValues;
        });
    };

    const handleCoustChange = (id, value) => {
        setCoustValues(prevValues => {
            let newValues;
            if (sameCoust) {
                // Se samePrice for true, atualiza todos os valores
                newValues = Object.keys(prevValues).reduce((acc, key) => {
                    acc[key] = value;
                    return acc;
                }, {});
                // Certifique-se de que todos os valores de lojas também sejam atualizados
                lojas.forEach((_, index) => {
                    newValues[index] = value;
                });
            } else {
                // Atualiza apenas o valor correspondente ao id fornecido
                newValues = {
                    ...prevValues,
                    [id]: value,
                };
            }
            console.log('Coust Values:', newValues); // Verifica o tamanho e o conteúdo do objeto
            return newValues;
        });
    };

    useEffect(() => {
        buscarUnidades();
        buscarGrifes();
        buscarLojas();
        buscarFornecedores();
    }, []);

    const buscarUnidades = () => {
        fetch("http://localhost:8080/unidade")
            .then(resposta => resposta.json())
            .then(dados => {
                setUnidades(dados);
                console.log("unidades recebidas com sucesso: ", unidades)
            })
            .catch((error) => {
                console.error('Erro ao receber as unidades :', error);
                console.log(unidades)
            });
    };

    const buscarGrifes = () => {
        fetch("http://localhost:8080/grife/all")
            .then(resposta => resposta.json())
            .then(dados => {
                setGrifes(dados);
                console.log("Grifes recebidas com sucesso: ", grifes)
            })
            .catch((error) => {
                console.error('Erro ao receber as grifes :', error);
                console.log(grifes)
            });
    };

    const buscarFornecedoresCnpj = () => {
        fetch("http://localhost:8080/fornecedorCnpj")
            .then(resposta => resposta.json())
            .then(dados => {
                setFornecedores(...fornecedores, dados);
                console.log("fornecedorescnpj recebidos com sucesso: ", fornecedores)
                console.log(fornecedores.length)
            })
            .catch((error) => {
                console.error('Erro ao receber os fornecedores cnpj :', error);
                console.log(fornecedores)
            });
    };

    const buscarFornecedores = () => {
        fetch("http://localhost:8080/fornecedorCpf")
            .then(resposta => resposta.json())
            .then(dados => {
                setFornecedores(dados);
                console.log("fornecedorescpf recebidos com sucesso: ", fornecedores)
                buscarFornecedoresCnpj()
            })
            .catch((error) => {
                console.error('Erro ao receber os fornecedorescpf:', error);
                console.log(fornecedores)
            });
    };

    const buscarLojas = () => {
        fetch("http://localhost:8080/loja/all")
            .then(resposta => resposta.json())
            .then(dados => {
                console.log("lojas recebidas com sucesso: ", lojas)
                setLojas(dados);
            })
            .catch((error) => {
                console.error('Erro ao receber as lojas  :', error);
                console.log(lojas)
            });
    };


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
                <h1>Novo produto</h1>
                <Card className='p-4'>
                    <h2>Dados do produto</h2>
                    <hr />

                    <div className="d-flex w-100 align-items-center gap-2">
                    <Form.Group className="w-50">
                        <Form.Label>Nome do produto</Form.Label>
                        <Form.Control
                            className="input"
                            name="email"
                            type='text'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </Form.Group>

                    <Form.Group  className="w-50" controlId="formBasicEmail">
                        <Form.Label>Código GTIN (EAN-13)</Form.Label>
                        <Form.Control
                            className="input"
                            type="text"
                            value={nome}
                            onChange={(e) => { setNome(e.target.value) }}
                        />
                    </Form.Group>
                    </div>

                    <div className="d-flex w-100 align-items-center gap-2">
                    <Form.Group className="w-50">
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
                    </div>

                    <div className="d-flex w-100 align-items-center gap-2">

                    <Form.Group className="w-50">
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

                    <Form.Group className="w-50">
                        <Form.Label>Grife</Form.Label>
                        <Form.Select
                            className="input"
                            name="grifes"
                            value={lojaCadastro}
                            onChange={(e) => { setLoja(e.target.value) }}
                        >
                            <option value="" disabled  >Selecione uma grife</option>
                            {grifes.map((grife) => (
                                <option>{grife.nome}</option>

                            ))}
                        </Form.Select>
                    </Form.Group>
                    </div>

                    <div className="d-flex w-100 align-items-center gap-2">
                    <Form.Group className="w-50">
                        <Form.Label>Grupo</Form.Label>
                        <Form.Select
                            className="input"
                            name="grupos"
                            value={lojaCadastro}
                            onChange={(e) => { setLoja(e.target.value) }}
                        >
                            <option value="" disabled  >Selecione um grupo de produtos</option>
                            {grupos.map((grupo) => (
                                <option>{grupo.nome}</option>

                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="w-50">
                        <Form.Label>Fornecedor</Form.Label>
                        <Form.Select 
                        className="input"
                        name="lojas"
                        value={lojaCadastro}
                        onChange={(e) => {setLoja(e.target.value)}}
                        >
                            <option value="" disabled  >Selecione um fornecedor</option>
                            {lojas.map((loja) => (
                            <option>{loja.nomeFantasia}</option>  
                            ))}
                        </Form.Select>
                    </Form.Group>
                    </div>

                    <div className="d-flex w-100 align-items-center gap-2 mt-2">
                    
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
                    </div>

                </Card>
                
                
                <h2>Informações de preço e estoque </h2>
                <hr style={{marginTop: "-1rem"}}/>
                <div className="d-flex flex-column gap-4">
                <Form.Group>
                        <Form.Check
                            inline
                            label="Cadastrar o mesmo valor de custo para todas as lojas"
                            name="group2"
                            checked={sameCoust}
                            onChange={(e) => {
                                setSameCoust(e.target.checked)
                            }}
                        />

                        <Form.Check
                            inline
                            label="Cadastrar o mesmo preço de venda para todas as lojas"
                            name="group1"
                            id={`inline-checkbox-1`}
                            checked={samePrice}
                            onChange={(e) => {
                                setSamePrice(e.target.checked)
                            }}
                        />
                    </Form.Group>

                {lojas.map((loja, index)=> (
                <Card className='p-4 d-flex flex-column gap-2' >
                    <h3 className="fw-bold">{loja.razaoSocial}</h3>

                    <div className="w-90 d-flex gap-4 ">
                    <Form.Group key={index}>
                        <Form.Label 
                        htmlFor={`input-${index}`}
                        >Preço de venda</Form.Label>
                        <Form.Control
                            id={`input-${index}`}
                            className="input"
                            name="rg"
                            type='text'
                            value={priceValues[index] || ''}
                            onChange={(e) => handlePriceChange(index, e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group key={index}>
                        <Form.Label
                        htmlFor={`input-${index}`}
                        >Custo</Form.Label>
                        <Form.Control
                            id={`input-${index}`}
                            className="input"
                            name="cargos"
                            value={coustValues[index] || ''}
                            onChange={(e) => handleCoustChange(index, e.target.value)}
                        />
                        
                    </Form.Group>

                    <Form.Group  key={index}>
                        <Form.Label>Lucro</Form.Label>
                        <Form.Control
                        className="input"
                            name="lucro"
                            value={calculateProfit(index) || ''}
                            type='text'
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>%Lucro</Form.Label>
                        <Form.Control 
                            className="input"
                            name="lucro em porcentagem" 
                            type='text' 
                            value={calculateProfitPercent(index) || ''}
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

                    <Form.Group>
                        <Form.Label>Qtd. Minima</Form.Label>
                        <Form.Control
                            className="input"
                            name="cep"
                            type='text'
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Data de validade do produto</Form.Label>
                        <Form.Control
                            className="input"
                            name="endereco"
                            type='text'
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                    </Form.Group>
                    </div>

                    
                </Card>
                ))}
                </div>
                <Button onClick={(e) => saveFuncionario(e)}>Cadastrar</Button>

                <div className='container-dados-usuario'>

                </div>
            </form>
        </>
    )
}

export default CadastroProdutos
