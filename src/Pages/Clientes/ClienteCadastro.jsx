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
  const [lojaCadastro, setLojaCadastro] = useState("aleixo")
  const [cep, setCep] = useState("68022-300")
  const [cidade, setCidade] = useState("Manaus")
  const [estado, setEstado] = useState("Amazonas")
  const [rua, setRua] = useState("edmunfo")
  const [numeroCasa, setCasa] = useState(10)
  const [bairro, setBairro] = useState("cachoeirinha")
  const [numerosTelefone, setTelefones] = useState(["+55597984857000", "+55597984857689"])
  const [emails, setEmails] = useState(["eamail@uea.edu.br", "teste@uea.edu.br"])
  const [habilitarSms, setHabilitarSms] = useState(false)
  const [habilitarWhatsapp, setHabilitarWhatsapp] = useState(false)
  const [cpf, setCpf] = useState("00853133271")
  const [nome, setNome] = useState("itl")
  const [rg, setRg] = useState("36316527")
  const [dataNascimento, setNascimento] = useState("25-12-2024")
  const [sexo, setSexo] = useState("Outro")
  const handleSalvar = (e) => {
    e.preventDefault();
    // console.log(JSON.stringify({
    //   tipoCliente,
    //   lojaCadastro,
    //   cep,
    //   cidade,
    //   estado,
    //   rua,
    //   numeroCasa,
    //   bairro,
    //   telefones,
    //   emails,
    //   habilitarSms,
    //   habilitarWhatsapp,
    //   cpf,
    //   rg,
    //   nascimento,
    //   sexo
    // }));

    // const dadosFormulario = {
    //   tipoCliente: "pf",
    //   lojaCadastro: "aleixo",
    //   cep: "68022-314",
    //   cidade: "Manaus",
    //   estado: "Amazonas",
    //   rua: "edmundo",
    //   numeroCasa: 18,
    //   bairro: "flores",
    //   numerosTelefone: ["+55597984857689"],
    //   emails: ["email@uea.edu.br"],
    //   habilitarSms: false,
    //   habilitarWhatsapp: false,
    //   cpf: "00853133271",
    //   nome: "fsefsefsefesfsfsef",
    //   rg: "36316527",
    //   dataNascimento: "25-12-2024",
    //   sexo: "OUTRO"
    // };

    fetch('http://localhost:8080/clientes/pf', {
      //mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
        tipoCliente,
        lojaCadastro,
        cep,
        cidade,
        estado,
        rua,
        numeroCasa,
        bairro,
        numerosTelefone,
        emails,
        habilitarSms,
        habilitarWhatsapp,
        cpf,
        nome,
        rg,
        dataNascimento,
        sexo
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((data) => {
        console.log('Post criado com sucesso:', data);
      })
      .catch((error) => {
        console.error('Erro ao criar post:', error);
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
        numerosTelefone, setTelefones, //
        habilitarSms, setHabilitarSms, //
        habilitarWhatsapp, setHabilitarWhatsapp,//
        cpf, setCpf, //
        nome, setNome, //
        rg, setRg, //
        dataNascimento, setNascimento, //
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
  