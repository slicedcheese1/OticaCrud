import React from 'react';
import { useState } from 'react';
import { MdPeopleAlt } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import ReactInputMask from 'react-input-mask';

import styles from './DadosPessoaisClienteRegistro.module.css'

import ClienteContext from '../../../Pages/Clientes/ClinteContext';

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"


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
    <Card className='p-3'>
      <h3>Dados Pessoais</h3>
      <hr />

      <div id="form-dados-pessoais" className={`${styles.formBox}` } method="post">
        <Form.Group className={styles.photoBox}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
              <Card.Title>Foto do Cliente</Card.Title>
              <Card.Text>
                Adicione uma foto para identificar um cliente no sistema.
              </Card.Text>
              
              <Form.Control className='p-2 rounded' type="file" name="photo"></Form.Control>
            </Card.Body>
          </Card>
        </Form.Group>
        <div className={`${styles.gp1Box}`}>
          <div className={styles.gp1}> 
            <div className={`d-flex flex-column gap-1 ${styles.gp1_1}`}>
              <label id="label-tipo_de_pessoa" htmlFor="tipo_de_pessoa">Tipo de Cliente</label>
              <div className={`${styles.gp1_1} d-flex flex-row gap-2`}>
                <Form.Group className={`gap-1 d-flex flex-row align-items-center`}>
                  <Form.Check id={styles.Redondo}
                  type="radio" 
                  name="pf" 
                  value="pf"
                  checked={tipoCliente === 'pf'} // Set checked state
                  onChange={handleTipoClienteChange} />
                  <Form.Label id="label-pf" htmlFor="pf"><MdPeopleAlt id="iconePf"/> Pessoa Fisica</Form.Label>
                </Form.Group>

                <Form.Group className={`gap-1 d-flex flex-row align-items-center`}>
                  <Form.Check  
                  type="radio" 
                  name="pj" 
                  id= {styles.Redondo} 
                  value="pj"
                  checked={tipoCliente === 'pj'} // Set checked state
                  onChange={handleTipoClienteChange}  />
                  <Form.Label id="label-pj" htmlFor="pj"><FaBuilding id="iconePf"/> Pessoa Jurídica</Form.Label>
                </Form.Group>
              </div>
            </div>

            <Form.Group className={`d-flex flex-column gap-1 ${styles.gp1_2}`}>
              <Form.Label id="label-lojas" htmlFor="lojas">Cadastro Em</Form.Label> 
              <Form.Select className={styles.input} name="loja" value={lojaCadastro} onChange={(e) => {setLojaCadastro(e.target.value)}} required>
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
              </Form.Select>    
            </Form.Group>
          </div>

          {tipoCliente === 'pf' && (
            <div className={styles.gp2}> 
              <Form.Group className={`${styles.gp2_1} ${styles.columnFlexBox}`}>
                <Form.Label id="label-nome" htmlFor="nome">Nome</Form.Label>
                <input type="text" maxLength={70} name='nome' 
                placeholder='Nome'
                id='nome'
                value={nome} 
                onChange={(e) => {setNome(e.target.value)}} required />
                {isSubmited && !nome && <span style={{ color: 'red' }}>Campo obrigatório</span>}
              </Form.Group>

              <Form.Group className={`${styles.gp2_2} ${styles.columnFlexBox}`}>
                <Form.Label id="label-sexo" htmlFor="sexo">Sexo</Form.Label>
                <Form.Select className={styles.input} name="sexo" value={sexo} onChange={(e) => {setSexo(e.target.value)}}>
                  <option value="" disabled selected >Selecione uma opção</option>
                  <option value="M">Masculino</option>  
                  <option value="F">Femino</option>  
                  <option value="O">Outros</option>  
                </Form.Select>  
              </Form.Group>

              <Form.Group className={`${styles.gp3_3} ${styles.columnFlexBox} ${styles.gap1} `}>
                <Form.Label id="label-data-de-nascimento" htmlFor="data-de-nascimento">Data de nascimento</Form.Label>
                <ReactInputMask className={styles.input} mask={'99-99-9999'} type="text" name="data-de-nascimento"
                value={dataNascimento} 
                placeholder='Data de Nascimento'
                id='nascimento'
                onChange={(e) => {setNascimento(e.target.value)}}
                onBlur={(e) => validarData(e.target.value)} 
                required
                />
                {erroData && <span style={{ color: 'red' }}>{erroData}</span>}<br/>
                {isSubmited && !dataNascimento && <span style={{ color: 'red' }}>Campo obrigatório</span>}
              </Form.Group>
            </div>
          )}

          {tipoCliente === 'pf' && (
            <div className={styles.gp3}> 
              <Form.Group className={`${styles.gp3_1} ${styles.columnFlexBox} ${styles.gap1}`}>
                <Form.Label id="label-rg" htmlFor="rg">RG</Form.Label>
                <input type="text" name="rg" 
                placeholder='RG'
                value={rg} 
                onChange={(e) => {setRg(e.target.value)}} />
              </Form.Group>

              <Form.Group className={`${styles.gp3_2} ${styles.columnFlexBox} ${styles.gap1}`}>
                <Form.Label id="label-cpf" htmlFor="cpf" >CPF</Form.Label>
                <ReactInputMask className={styles.input} mask={'999.999.999-99'} type="text" name='cpf' 
                id='cpf'
                placeholder='CPF'
                value={cpf} 
                onChange={(e) => {setCpf(e.target.value)}} 
                onBlur={(e) => {validarCampoCPF(e.target.value)}}
                />
                {erroCpf && <span style={{ color: 'red' }}>{erroCpf}</span>}
                {isSubmited && !cpf && <span style={{ color: 'red' }}>Campo obrigatório</span>}
              </Form.Group>

              
            </div>
          )}

          {tipoCliente === 'pj' && (
            <div className={styles.gp4}> 
              <Form.Group className={`${styles.gp3_1} ${styles.columnFlexBox} ${styles.gap1}`}>
                <Form.Label id="label-razao-social" htmlFor="razao-social">Razão Social</Form.Label>
                <input placeholder='Razão Social' type="text" name='razao-social' />
              </Form.Group>

              <Form.Group className={`${styles.gp3_2} ${styles.columnFlexBox} ${styles.gap1}`}>
                <Form.Label id="label-nome-fantasia" htmlFor="nome-fantasia">Nome Fantasia</Form.Label>
                <input placeholder='Nome Fantasia' type="text" name="nome-fantasia" />
              </Form.Group>
            </div>
          )}

          {tipoCliente === 'pj' && (
            <div className={styles.gp4}> 
              <Form.Group className={`${styles.gp3_1} ${styles.columnFlexBox} ${styles.gap1}`}>
                <Form.Label id="label-CNPJ" htmlFor='CNPJ'>CNPJ</Form.Label>
                <ReactInputMask className={styles.input} placeholder='CNPJ' mask ="99.999.999/9999-99" type="text" name='CNPJ' />
              </Form.Group>
            </div>
          )}
        </div>

      </div>
    </Card>
    
    {tipoCliente === 'pj' && (
    <div className={styles.card1}>
      <h3>Informações Fiscais</h3>
      <hr />

      <form id="form-dados-fiscais" className={styles.formBox} method="post">
        <div className={styles.gp1Box}>
          <div className={styles.gp3}> 
              <Form.Group className={`${styles.gp3_1} ${styles.columnFlexBox} ${styles.gap1}`}>
                <Form.Label id="label-inscricao-estadual" htmlFor="inscricao-estadual" >Inscrição Estadual</Form.Label>
                <input className='p-2 rounded' type="text" name="inscricao-estadual"/>
              </Form.Group>

              <Form.Group className={`${styles.gp3_2} ${styles.columnFlexBox} ${styles.gap1}`}>
                <Form.Label id="label-inscricao-municipal" htmlFor="inscricao-municipal" >Inscrição Municipal</Form.Label>
                <input className='p-2 rounded' type="text" name='inscricao-municipal' />
              </Form.Group>

              <Form.Group className={`${styles.gp3_3} ${styles.columnFlexBox} ${styles.gap1}`}>
                <Form.Label id="label-suframa" htmlFor="suframa">Suframa</Form.Label>
                <input className='p-2 rounded' type="text" name="suframa" />
              </Form.Group>
            </div>
        </div>


      </form>
    </div>
    )}
    </>
  )
  }
  
  export default DadosPessoaisClienteRegistro;
