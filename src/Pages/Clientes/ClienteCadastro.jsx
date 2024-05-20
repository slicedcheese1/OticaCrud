import React from "react"
import { useState } from "react"
import axios from "axios"

import ClienteContext from "./ClinteContext"

import DadosContatoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosContatoClienteRegistro"
import DadosEndereçoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosEndereçoClienteRegistro"
import DadosObservacoesClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosObservacoesClienteRegistro"
import DadosPessoaisClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosPessoaisClienteRegistro"
import './ClienteCadastro.css'

// function gerarJsonDoFormulario(dadosFormulario) {
//   return {
//     tipoCliente: dadosFormulario.tipoCliente,
//     lojaCadastro: dadosFormulario.lojaCadastro,
//     cep: dadosFormulario.cep,
//     cidade: dadosFormulario.cidade,
//     estado: dadosFormulario.estado,
//     rua: dadosFormulario.rua,
//     numeroCasa: dadosFormulario.numeroCasa,
//     bairro: dadosFormulario.bairro,
//     numerosTelefone: dadosFormulario.telefones,
//     emails: dadosFormulario.emails,
//     habilitarSms: dadosFormulario.habilitarSms,
//     habilitarWhatsapp: dadosFormulario.habilitarWhatsapp,
//     cpf: dadosFormulario.cpf,
//     nome: dadosFormulario.nome,
//     rg: dadosFormulario.rg,
//     dataNascimento: dadosFormulario.nascimento, // Formate a data de nascimento
//     sexo: dadosFormulario.sexo,
//   };
// }


function ClienteCadastro() {

  const [tipoCliente, setTipoCliente] = useState("pf")
  const [lojaCadastro, setLojaCadastro] = useState("")
  const [cep, setCep] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [rua, setRua] = useState("")
  const [numeroCasa, setCasa] = useState("")
  const [bairro, setBairro] = useState("")
  const [telefones, setTelefones] = useState([])
  const [emails, setEmails] = useState([])
  const [habilitarSms, setHabilitarSms] = useState(false)
  const [habilitarWhatsapp, setHabilitarWhatsapp] = useState(false)
  const [cpf, setCpf] = useState("")
  const [nome, setNome] = useState("")
  const [rg, setRg] = useState("")
  const [nascimento, setNascimento] = useState("")
  const [sexo, setSexo] = useState("")

  const handleSalvar = (e) => {
    e.preventDefault()
    const dadosFormulario = {
      // tipoCliente: "pf",
      // lojaCadastro: "aleixo",
      // cep: "68022-314",
      // cidade: "Manaus",
      // estado: "Amazonas",
      // rua: "edmundo",
      // numeroCasa: 18,
      // bairro: "flores",
      // numerosTelefone: [
      //   "+55597984857689"
      // ],
      // emails:["email@uea.edu.br"],
      // habilitarSms:false,
      // habilitarWhatsapp: false,
      // cpf: "00853133271",
      // nome: "fsefsefsefesfsfsef",
      // rg: "36316527",
      // dataNascimento: "25-12-2024",
      // sexo: "OUTRO"
      
        "tipoCliente": "pf",
        "lojaCadastro": "aleixo",
        "cep": "68022-314",
        "cidade": "Manaus",
        "estado": "Amazonas",
        "rua": "edmundo",
        "numeroCasa": 18,
        "bairro": "flores",
        "numerosTelefone": [
          "+55597984857689"
        ],
        "emails":["email@uea.edu.br"],
        "habilitarSms":false,
        "habilitarWhatsapp": false,
        "cpf": "00853133271",
        "nome": "fsefsefsefesfsfsef",
        "rg": "36316527",
        "dataNascimento": "25-12-2024",
        "sexo": "OUTRO"
      
    };
  
    // const jsonDoFormulario = gerarJsonDoFormulario(dadosFormulario);
    console.log(dadosFormulario); // Exiba o JSON no console

    axios.post("http://localhost:8080/clientes/pf", dadosFormulario)
    .then((response) => {
      // Tratar o sucesso da requisição
      console.log("Dados do cliente salvos com sucesso!");
    })
    .catch((error) => {
      // Tratar o erro da requisição
      console.error("Falha ao salvar os dados do cliente:", error);
    });
  };

  return (
    <>
      <ClienteContext.Provider value=
      {{
        tipoCliente, setTipoCliente, //
        lojaCadastro, setLojaCadastro, //
        cep, setCep, //
        cidade, setCidade, //
        estado, setEstado, //
        rua, setRua, //
        numeroCasa, setCasa, //
        bairro , setBairro,//
        emails ,setEmails, //
        telefones, setTelefones, //
        habilitarSms, setHabilitarSms, //
        habilitarWhatsapp, setHabilitarWhatsapp,//
        cpf, setCpf, //
        nome, setNome, //
        rg, setRg, //
        nascimento, setNascimento, //
        sexo, setSexo//
      }}>
        <form className="container2" id='ClienteCadastroForm'>
            <DadosPessoaisClienteRegistro/>
            <DadosEndereçoClienteRegistro/>
            <DadosContatoClienteRegistro/>
            <DadosObservacoesClienteRegistro/>
            <button type="submit" onClick={handleSalvar} >Salvar</button>
        </form>
      </ClienteContext.Provider>
    </>
  )
}
  
  export default ClienteCadastro
  