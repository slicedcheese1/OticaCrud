import React from "react"
import { useState, useEffect } from "react"

import ClienteContext from "./ClinteContext"
import Message from "../../Componentes/Mensagem/Message.jsx"

import DadosContatoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosContatoClienteRegistro"
import DadosEnderecoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosEnderecoClienteRegistro"
import DadosObservacoesClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosObservacoesClienteRegistro"
import DadosPessoaisClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosPessoaisClienteRegistro"

import styles from './ClienteCadastro.module.css'
import ButtonC from './ButtonC'; // Importando o componente ButtonC

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

  const [msgCards, setMsgCards] = useState([])
  const [showMsgCards, setShowMsgCards] = useState(false)

  const addMsgCard = (event, nameClass, mensage) => {
    event.preventDefault();
    const newId = msgCards.length ? msgCards[msgCards.length - 1].id + 1 : 0;
    setMsgCards([...msgCards, { id: newId, component: <Message nameClass={nameClass} mensage={mensage} id={newId} key={newId} /> }]);
    console.log(msgCards)
    console.log("msgCards")

  };

  useEffect(() => {
    setShowMsgCards(msgCards.length != 0)
    console.log("showMsgCards: ", showMsgCards)
  }, [msgCards])

  const handleSalvar = (e) => {
    e.preventDefault()
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
        addMsgCard(e, "msg-body-green", "Cliente criado com sucesso.")
      })
      .catch((error) => {
        console.error('Erro ao criar post:', error);
        addMsgCard(e, "msg-body-red", "Falha ao registrar o cliente.")
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

        <div  className={styles.clientecadastrocontainer}>
          {showMsgCards && (
            <div className={styles.boxmensages}>
              <ul className={styles.cardlist}>
                {msgCards.map(card => (
                  <li key={card.id}>{card.component}</li>
                ))}
              </ul>
            </div>
          )}
          
          <form className={styles.container2} id='ClienteCadastroForm'  autocomplete="off">
              <DadosPessoaisClienteRegistro/>
              <DadosEnderecoClienteRegistro/>
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
  