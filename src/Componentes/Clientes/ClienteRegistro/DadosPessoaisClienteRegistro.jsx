import React from 'react';

import { MdPeopleAlt } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import ReactInputMask from 'react-input-mask';

import './DadosPessoaisClienteRegistro.css'

import ClienteContext from '../../../Pages/Clientes/ClinteContext';

function DadosPessoaisClienteRegistro() {

  const {
    tipoCliente, setTipoCliente,
    lojaCadastro,  setLojaCadastro,
    cpf, setCpf,
    nome, setNome,
    rg, setRg, 
    nascimento, setNascimento, 
    sexo, setSexo
   } = React.useContext(ClienteContext);

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
          <label htmlFor="photo">Clique sobre a imagem para alterar</label>
          <input type="file" name="photo"/>
        </div>

        <div className="gp1-box" >
            <div className="gp1" > 
              <div className="column-flex-box gap1 gp1-1">
                <label htmlFor="tipo_de_pessoa">Tipo de Cliente</label>
                <div className="gp1-1 row-flex-box gap2">
                  <div className='gap1 row-flex-box'>
                    <input 
                    type="radio" 
                    name="pf" 
                    value="pf"
                    checked={tipoCliente === 'pf'} // Set checked state
                    onChange={handleTipoClienteChange} />
                    <label htmlFor="pf"><MdPeopleAlt/> Pessoa Fisica</label>
                  </div>

                  <div className='gap1 row-flex-box'>
                    <input type="radio" 
                    name="pj" 
                    id="pj"
                    value="pj"
                    checked={tipoCliente === 'pj'} // Set checked state
                    onChange={handleTipoClienteChange}  />
                    <label htmlFor="pj"><FaBuilding/> Pessoa Jurídica</label>
                  </div>
                </div>
              </div>

              <div className="column-flex-box gap1 gp1-2">
                <label htmlFor="lojas">Cadastro Em</label> 
                <select name="loja" value={lojaCadastro} onChange={(e) => {setLojaCadastro(e.target.value)}}>
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
                  <label htmlFor="nome">Nome</label>
                  <input type="text" name='nome' value={nome} onChange={(e) => {setNome(e.target.value)}} />
                </div>

                <div className='gp2-2 column-flex-box'>
                  <label htmlFor="apelido" >Apelido</label>
                  <input type="text" name='apelido' />
                </div>

                <div className='gp2-2 column-flex-box'>
                  <label htmlFor="sexo">Sexo</label>
                  <select name="sexo" value={sexo} onChange={(e) => {setSexo(e.target.value)}}>
                    <option value="Masculino">Masculino</option>  
                    <option value="Feminino">Femino</option>  
                    <option value="Outros">Outros</option>  
                  </select>  
                  
                </div>
              </div>
            )}

            {tipoCliente === 'pf' && (
              <div className="gp3"> 
                <div className='gp3-1 column-flex-box gap1'>
                  <label htmlFor="rg">RG</label>
                  <input type="text" name="rg" value={rg} onChange={(e) => {setRg(e.target.value)}} />
                </div>

                <div className='gp3-2 column-flex-box gap1'>
                  <label htmlFor="cpf" >CPF</label>
                  <ReactInputMask mask={'999.999.999-99'} type="text" name='cpf' value={cpf} onChange={(e) => {setCpf(e.target.value)}} />
                </div>

                <div className='gp3-3 column-flex-box gap1'>
                  <label htmlFor="data-de-nascimento">Data de nascimento</label>
                  <ReactInputMask mask={'99-99-9999'} type="text" name="data-de-nascimento" value={nascimento} onChange={(e) => {setNascimento(e.target.value)}} />
                </div>
              </div>
            )}

            {tipoCliente === 'pj' && (
              <div className="gp4"> 
                <div className='gp3-1 column-flex-box gap1'>
                  <label htmlFor="razao-social">Razão Social</label>
                  <input type="text" name='razao-social' />
                </div>

                <div className='gp3-2 column-flex-box gap1'>
                  <label htmlFor="nome-fantasia" >Nome Fantasia</label>
                  <input type="text" name="nome-fantasia" />
                </div>
              </div>
            )}

            {tipoCliente === 'pj' && (
              <div className="gp3"> 
                <div className='gp3-1 column-flex-box gap1'>
                  <label htmlFor='CNPJ'>CNPJ</label>
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
                <label for="inscricao-estadual" >Inscrição Estadual</label>
                <input type="text" name="inscricao-estadual"/>
              </div>

              <div className='gp3-2 column-flex-box gap1'>
                <label for="inscricao-municipal" >Inscrição Municipal</label>
                <input type="text" name='inscricao-municipal' />
              </div>

              <div className='gp3-3 column-flex-box gap1'>
                <label  for="suframa">Suframa</label>
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
  
  export default DadosPessoaisClienteRegistro