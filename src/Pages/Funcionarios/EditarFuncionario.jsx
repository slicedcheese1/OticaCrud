import { React, useState } from "react"
import { useParams } from "react-router-dom"
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

    const {id} = useParams()

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

    // Carregar dados do funcionario
    useState(() => {
        fetch(`http://localhost:8080/usuarios/${id}`, {
        method: 'GET'
        })
        .then(resposta => resposta.json())
        .then(dados => {
            setNome(dados.nome)
            setSenha(dados.senha)
            setLojaCadastro(dados.lojaCadastro)
            setCargos(dados.cargos)
            setRg(dados.rg)
            setCpf(dados.cpf)
            setTelefonePrimario(dados.telefonePrimario)
            setTelefoneSecundario(dados.telefoneSecundario)
            setCep(dados.cep)
            setEndereco(dados.endereco)
            setBairro(dados.bairro)
            setCidade(dados.cidade)
            setLimiteDesconto(dados.limiteDesconto)
            setEmail(dados.email)
            setLoja(dados.loja)
        })
        .catch((error) => {
        console.error('Erro ao buscar cargo:', error);
        });
    }, []
    )

    function editarFuncionario(e){
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

        fetch(`http://localhost:8080/usuarios/${id}`, {
            //mode: 'no-cors',
            method: 'PUT',
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

    return(<>
        <div>
            <form>
                <div className='container-dados-pessoais-funcionario'>
                    <h2>Dados pessoais </h2>
                
                    <hr/>
                    <label htmlFor="nome">Nome</label>
                    <input
                    name="nome"
                    type='text' 
                    placeholder='Nome'
                    value={nome}
                    onChange={(e) => {setNome(e.target.value)}}
                    />
                    
                    <label htmlFor="loja">Loja</label>
                    <input
                    name="loja"
                    type='text' 
                    placeholder='loja'
                    value={loja}
                    onChange={(e) => {setLoja(e.target.value)}}
                    />
                    
                    <label htmlFor="email">Email</label>
                    <input
                    name="email"
                    type='text' 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    />

                    <label htmlFor="telefoneprimario">Telefone Princial</label>
                    <input
                    name="telefoneprimario"
                    type='text' 
                    placeholder='Telefone Princial'
                    value={telefonePrimario}
                    onChange={(e) => {setTelefonePrimario(e.target.value)}}
                    />

                    <label htmlFor="telefonesecundario">Telefone Secundário</label>
                    <input
                    name="telefonesecundario"
                    type='text' 
                    placeholder='Telefone Secundário'
                    value={telefoneSecundario}
                    onChange={(e) => {setTelefoneSecundario(e.target.value)}}
                    />  

                    <label htmlFor="senha">Senha</label>
                    <input
                    name="senha"
                    type='password' 
                    placeholder='Senha '
                    value={senha}
                    onChange={(e) => {setSenha(e.target.value)}}
                    />  

                    <label htmlFor="lojas">Loja</label>
                    <select 
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
                    </select>

                    <label htmlFor="cargos">Função</label>
                    <select 
                    name="cargos"
                    value={cargo}
                    onChange={(e) => {addCargo(e)}}
                    >
                        <option value="" disabled  >Selecione um cargo</option>
                        <option value="exemplo1">cargo 1</option>  
                        <option value="exemplo2">cargo 2</option>  

                    </select>

                    <label htmlFor="llimitedescontoojas">Limite de Desconto</label>
                    <select 
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
                    </select>

                    <label>CEP</label>
                    <input type='text' placeholder='CPF'/> 

                    <label htmlFor="rg">RG</label>
                    <input 
                    name="rg"
                    type='text' 
                    placeholder='RG'
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                    /> 

                    <label htmlFor="cpf">RG</label>
                    <input 
                    name="cpf"
                    type='text' 
                    placeholder='CPF'
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    /> 
                    <br/>
                    <br/> 
                </div>

                <div className='container-dados-endereço-funcionario'>
                    <h2>Dados de endereço </h2>
                    <hr/>
                    <label htmlFor="cep">CEP</label>
                    <input 
                    name="cep"
                    type='text' 
                    placeholder='CEP'
                    value={cep}
                    onChange={(e)=>setCep(e.target.value)}
                    /> 

                    <label htmlFor="endereco">Endereço</label>
                    <input 
                    name="endereco"
                    type='text' 
                    placeholder='Endereço'
                    value={endereco}
                    onChange={(e)=>setEndereco(e.target.value)}
                    /> 

                    <label htmlFor="bairro">Bairro</label>
                    <input 
                    name="bairro"
                    type='text' 
                    placeholder='Bairro'
                    value={bairro}
                    onChange={(e)=>setBairro(e.target.value)}
                    /> 

                    <label htmlFor="cidade">cidade</label>
                    <input 
                    name="cidade"
                    type='text' 
                    placeholder='cidade'
                    value={cidade}
                    onChange={(e)=>setCidade(e.target.value)}
                    />


                </div>
                <button
                onClick={(e) => editarFuncionario(e)}
                >Cadastrar</button>

                <div className='container-dados-usuario'>
                
                </div>
            </form>
        </div>
    </>
    )
}

export default CadastroFuncionario

