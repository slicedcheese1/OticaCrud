import React from 'react';

import { MdPeopleAlt } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import ReactInputMask from 'react-input-mask';

import './DadosPessoaisClienteRegistro.css'

import ClienteContext from '../../../Pages/Clientes/ClinteContext';

import { useState } from 'react';

function DadosPessoaisClienteRegistro() {

  const [erroData, setErroData] = useState('');
  const [erroCpf, setErroCpf] = useState('');

  const {
    tipoCliente, setTipoCliente,
    lojaCadastro,  setLojaCadastro,
    cpf, setCpf,
    nome, setNome,
    rg, setRg, 
    dataNascimento, setNascimento, 
    sexo, setSexo,
    isSubmited,
    setErroForm
   } = React.useContext(ClienteContext);

   const validarCampoCPF = (e) => {
    const cpfValue = e;
    console.log("cpf: ", cpfValue)
    if (!validarCPF(cpfValue)) {
      setErroForm(true)
      setErroCpf('CPF inválido');
    } else {
      setErroForm(false)
      setErroCpf('');
    }
  };

   const validarCPF = (cpf) => {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');
    console.log("cpf: ", cpf)

    setCpf(cpf)

    if (cpf.length !== 11) return false;

    // Elimina CPFs inválidos conhecidos
    if (
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return false;
    }

    // Valida dígitos verificadores
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;

    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(10))) return false;

    return true;
  };

   const validarData = (data) => {
    const [dia, mes, ano] = data.split('-').map(Number);
    const dataValida = new Date(ano, mes - 1, dia);
    const anoAtual = new Date().getFullYear();

    const ehDataValida = 
      dataValida.getFullYear() === ano &&
      dataValida.getMonth() === mes - 1 &&
      dataValida.getDate() === dia &&
      ano <= anoAtual

    if (!ehDataValida) {
      setErroForm(true)
      setErroData('Data de nascimento inválida');
    } else {
      setErroForm(false)
      setErroData('');
    }
  };

  const handleTipoClienteChange = (event) => {
    setTipoCliente(event.target.value);

    if (tipoCliente === 'pj') {
      setCardVisible(true)

    } else {
      setCardVisible(false)
    }
    console.log(cardVisible)

  };

  return (
    <>
    
    <h2>Novo Cliente</h2>
    <div className="card">
      <h3>Dados Pessoais</h3>
      <hr />

      <div id="form-dados-pessoais" className='formBox' method="post">
        <div className="photoBox">
          <label id="label-photo" htmlFor="photo">Clique sobre a imagem para alterar</label>
          <input type="file" name="photo"/>
        </div>

        <div className="gp1-box" >
            <div className="gp1" > 
              <div className="column-flex-box gap1 gp1-1">
                <label id="label-tipo_de_pessoa" htmlFor="tipo_de_pessoa">Tipo de Cliente</label>
                <div className="gp1-1 row-flex-box gap2">
                  <div className='gap1 row-flex-box'>
                    <input 
                    type="radio" 
                    name="pf" 
                    value="pf"
                    checked={tipoCliente === 'pf'} // Set checked state
                    onChange={handleTipoClienteChange} />
                    <label id="label-pf" htmlFor="pf"><MdPeopleAlt id="iconePf"/> Pessoa Fisica</label>
                  </div>

                  <div className='gap1 row-flex-box'>
                    <input type="radio" 
                    name="pj" 
                    id="pj"
                    value="pj"
                    checked={tipoCliente === 'pj'} // Set checked state
                    onChange={handleTipoClienteChange}  />
                    <label id="label-pj" htmlFor="pj"><FaBuilding id="iconePf"/> Pessoa Jurídica</label>
                  </div>
                </div>
              </div>

              <div className="column-flex-box gap1 gp1-2">
                <label id="label-lojas" htmlFor="lojas">Cadastro Em</label> 
                <select name="loja" value={lojaCadastro} onChange={(e) => {setLojaCadastro(e.target.value)}} required>
                  <option value="" disabled selected >Selecione uma opção</option>
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
              </div>
            </div>

            {tipoCliente === 'pf' && (
              <div className="gp2"> 
                <div className='gp2-1 column-flex-box'>
                  <label id="label-nome" htmlFor="nome">Nome</label>
                  <input type="text" maxLength={70} name='nome' 
                  id='nome'
                  value={nome} 
                  onChange={(e) => {setNome(e.target.value)}} required />
                  {isSubmited && !nome && <span style={{ color: 'red' }}>Campo obrigatório</span>}
                </div>

                <div className='gp2-2 column-flex-box'>
                  <label id="label-sexo" htmlFor="sexo">Sexo</label>
                  <select name="sexo" value={sexo} onChange={(e) => {setSexo(e.target.value)}}>
                    <option value="" disabled selected >Selecione uma opção</option>
                    <option value="M">Masculino</option>  
                    <option value="F">Femino</option>  
                    <option value="O">Outros</option>  
                  </select>  
                </div>

                <div className='gp3-3 column-flex-box gap1'>
                  <label id="label-data-de-nascimento" htmlFor="data-de-nascimento">Data de nascimento</label>
                  <ReactInputMask mask={'99-99-9999'} type="text" name="data-de-nascimento"
                  value={dataNascimento} 
                  id='nascimento'
                  onChange={(e) => {setNascimento(e.target.value)}}
                  onBlur={(e) => validarData(e.target.value)} 
                  required
                  />
                  {erroData && <span style={{ color: 'red' }}>{erroData}</span>}
                  {isSubmited && !dataNascimento && <span style={{ color: 'red' }}>Campo obrigatório</span>}
                </div>
              </div>
            )}

            {tipoCliente === 'pf' && (
              <div className="gp3"> 
                <div className='gp3-1 column-flex-box gap1'>
                  <label id="label-rg" htmlFor="rg">RG</label>
                  <input type="text" name="rg" 
                  value={rg} 
                  onChange={(e) => {setRg(e.target.value)}} />
                </div>

                <div className='gp3-2 column-flex-box gap1'>
                  <label id="label-cpf" htmlFor="cpf" >CPF</label>
                  <ReactInputMask mask={'999.999.999-99'} type="text" name='cpf' 
                  id='cpf'
                  value={cpf} 
                  onChange={(e) => {setCpf(e.target.value)}} 
                  onBlur={(e) => {validarCampoCPF(e.target.value)}}
                  />
                  {erroCpf && <span style={{ color: 'red' }}>{erroCpf}</span>}
                  {isSubmited && !cpf && <span style={{ color: 'red' }}>Campo obrigatório</span>}

                </div>

                
              </div>
            )}

            {tipoCliente === 'pj' && (
              <div className="gp4"> 
                <div className='gp3-1 column-flex-box gap1'>
                  <label id="label-razao-social" htmlFor="razao-social">Razão Social</label>
                  <input type="text" name='razao-social' />
                </div>

                <div className='gp3-2 column-flex-box gap1'>
                  <label id="label-nome-fantasia" htmlFor="nome-fantasia">Nome Fantasia</label>
                  <input type="text" name="nome-fantasia" />
                </div>
              </div>
            )}

            {tipoCliente === 'pj' && (
              <div className="gp3"> 
                <div className='gp3-1 column-flex-box gap1'>
                  <label id="label-CNPJ" htmlFor='CNPJ'>CNPJ</label>
                  <ReactInputMask mask ="99.999.999/9999-99" type="text" name='CNPJ' />
                </div>
              </div>
            )}
        </div>

      </div>
    </div>
    
    {tipoCliente === 'pj' && (
    <div className="card">
      <h3>Informações Fiscais</h3>
      <hr />

      <form id="form-dados-fiscais" className='formBox' method="post">
        <div className="gp1-box" >
          <div className="gp3"> 
              <div className='gp3-1 column-flex-box gap1'>
                <label id="label-inscricao-estadual" htmlFor="inscricao-estadual" >Inscrição Estadual</label>
                <input type="text" name="inscricao-estadual"/>
              </div>

              <div className='gp3-2 column-flex-box gap1'>
                <label id="label-inscricao-municipal" htmlFor="inscricao-municipal" >Inscrição Municipal</label>
                <input type="text" name='inscricao-municipal' />
              </div>

              <div className='gp3-3 column-flex-box gap1'>
                <label id="label-suframa" htmlFor="suframa">Suframa</label>
                <input type="text" name="suframa" />
              </div>
            </div>
        </div>


      </form>
    </div>
    )}
    </>
  )
  }
  
  export default DadosPessoaisClienteRegistro;
