import React from "react"
import { useState } from "react"
import axios from "axios"

import ClienteContext from "./ClinteContext"

import DadosContatoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosContatoClienteRegistro"
import DadosEndereçoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosEndereçoClienteRegistro"
import DadosObservacoesClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosObservacoesClienteRegistro"
import DadosPessoaisClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosPessoaisClienteRegistro"

import styles from './ClienteCadastro.module.css'
import ButtonC from './ButtonC'; // Importando o componente ButtonC
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
  const [numeroCasa, setCasa] = useState()
  const [bairro, setBairro] = useState("")
  const [numerosTelefone, setTelefones] = useState([])
  const [emails, setEmails] = useState([])
  const [habilitarSms, setHabilitarSms] = useState(false)
  const [habilitarWhatsapp, setHabilitarWhatsapp] = useState(false)
  const [cpf, setCpf] = useState("")
  const [nome, setNome] = useState("")
  const [rg, setRg] = useState("")
  const [dataNascimento, setNascimento] = useState("")
  const [sexo, setSexo] = useState("")
  const [isSubmited, setIsSubmited] = useState(false);
  const handleSalvar = (e) => {
    setIsSubmited = true
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
        sexo, setSexo,//
        isSubmited
      }}>

      <div   className={styles.clientecadastrocontainer}>
          <form className={styles.container2} id='ClienteCadastroForm'>
              <DadosPessoaisClienteRegistro/>
              <DadosEndereçoClienteRegistro/>
              <DadosContatoClienteRegistro/>
              <DadosObservacoesClienteRegistro/>
              <ButtonC onClick={handleSalvar}>Salvar</ButtonC>
          </form>
        </div>
      </ClienteContext.Provider>
    </>
  )
}
  
  export default ClienteCadastro
  