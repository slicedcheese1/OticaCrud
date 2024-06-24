import React from "react"
import { useState } from "react"

import ClienteContext from "./ClinteContext"

import DadosContatoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosContatoClienteRegistro"
import DadosEnderecoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosEnderecoClienteRegistro"
import DadosObservacoesClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosObservacoesClienteRegistro"
import DadosPessoaisClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosPessoaisClienteRegistro"

import Button from "react-bootstrap/Button"

import styles from './ClienteCadastro.module.css'

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

  const [isSubmited, setIsSubmited] =  useState(false);
  const [erroForm, setErroForm] =  useState(false);
  const [cardTel, setCardTel] = useState([]);
  const [cardEmail, setCardEmail] = useState([]);
  const [showingCardResponsavel, setShowingCardResponsavel] = useState(false);

  const handleSalvar = (e) => {
    setIsSubmited(true)

    if (erroForm || !dataNascimento || !nome || !cpf) {
      console.log(dataNascimento, nome, cpf)
      console.log(erroForm)
      return
    }
    
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
        isSubmited,
        erroForm, setErroForm,
        cardTel, setCardTel,
        cardEmail, setCardEmail,
        showingCardResponsavel, setShowingCardResponsavel
      }}>

      <form className="formContainer" autocomplete="off">
          <DadosPessoaisClienteRegistro/>
          <DadosEnderecoClienteRegistro/>
          <DadosContatoClienteRegistro/>
          <DadosObservacoesClienteRegistro/>
          <Button onClick={handleSalvar}>Salvar</Button>
      </form>
      </ClienteContext.Provider>
    </>
  )
}
  
  export default ClienteCadastro
  