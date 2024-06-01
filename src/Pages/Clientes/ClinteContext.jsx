import React from "react";

const ClienteContext = React.createContext({
    tipoCliente: "",
    lojaCadastro: "",
    cep: "",
    cidade: "",
    estado: "",
    rua: "",
    numeroCasa: -1,
    bairro: "",
    numerosTelefone: [],
    emails:[],
    habilitarSms:false,
    habilitarWhatsapp: false,
    cpf:  "",
    nome:  "",
    rg:  "",
    dataNascimento:  "",
    sexo:  "",
    isSubmited:  false ,
    erroForm:false, 
    cardTel: [],
    cardEmail: [] 
      
  });
  
  export default ClienteContext;
/*
  {
    tipoCliente": "pf",
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
  }
*/