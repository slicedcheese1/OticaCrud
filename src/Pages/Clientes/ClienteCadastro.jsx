import React from "react"
import { useState } from "react"

import ClienteContext from "./ClinteContext"

import DadosContatoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosContatoClienteRegistro"
import DadosEndereçoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosEndereçoClienteRegistro"
import DadosObservacoesClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosObservacoesClienteRegistro"
import DadosPessoaisClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosPessoaisClienteRegistro"
import './ClienteCadastro.css'


function ClienteCadastro() {

  const [tipoCliente, setTipoCliente] = useState("")
  const [lojaCadastro, setLojaCadastro] = useState("")
  const [cep, setCep] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [rua, setRua] = useState("")
  const [numeroCasa, setCasa] = useState("")
  const [bairro, setBairro] = useState("")
  const [telefones, setTelefone] = useState([])
  const [emails, setEmail] = useState([])
  const [habilitarSms, setHabilitarSms] = useState(false)
  const [habilitarWhatsapp, setHabilitarWhatsapp] = useState(false)
  const [cpf, setCpf] = useState("")
  const [nome, setNome] = useState("")
  const [rg, setRg] = useState("")
  const [nascimento, setNascimento] = useState("")
  const [sexo, setSexo] = useState("")

  const adicionarTelefone = (tel) => {
    setTelefone([...telefones, tel]);
  };

  const adicionarEmail = (email) => {
    setEmail([...emails, email]);
  };

  return (
    <>
      <ClienteContext.Provider value={{
        tipoCliente, setTipoCliente,
        lojaCadastro, setLojaCadastro, 
        cep, setCep, 
        cidade, setCidade, 
        estado, setEstado, 
        rua, setRua, 
        numeroCasa, setCasa, 
        bairro , setBairro,
        emails ,adicionarEmail, 
        telefones, adicionarTelefone, 
        habilitarSms, setHabilitarSms, 
        habilitarWhatsapp, setHabilitarWhatsapp,
        cpf, setCpf, 
        nome, setNome, 
        rg, setRg, 
        nascimento, setNascimento, 
        sexo, setSexo
      }}>
        <form className="container2" id='ClienteCadastroForm'>
            <DadosPessoaisClienteRegistro/>
            <DadosEndereçoClienteRegistro/>
            <DadosContatoClienteRegistro/>
            <DadosObservacoesClienteRegistro/>
            <button type="submit">Salvar</button>
        </form>
      </ClienteContext.Provider>
    </>
  )
}
  
  export default ClienteCadastro
  