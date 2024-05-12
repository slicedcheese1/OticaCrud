import './DadosPessoaisClienteRegistro.css'
import { MdPeopleAlt } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

import { useState } from 'react';


function DadosPessoaisClienteRegistro() {
  const [tipoCliente, setTipoCliente] = useState('pessoa-fisica'); // Initial state
  const [cardVisible, setCardVisible] = useState(tipoCliente === 'pessoa-fisica')

  const handleTipoClienteChange = (event) => {
    setTipoCliente(event.target.value);

    if (tipoCliente === 'pessoa-juridica') {
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

      <form action="" className='formBox'>
        <div className="photoBox">
          <label for="myfile">Clique sobre a imagem para alterar</label>
          <input type="file" name="myfile" id="myfile" />
        </div>

        <div className="gp1-box" >
            <div className="gp1" > 
              <div className="column-flex-box gap1">
                <label>Tipo de Cliente</label>
                <div className="gp1-1 row-flex-box gap2">
                  <div className='gap1 row-flex-box'>
                    <input 
                    type="radio" 
                    name="tipo_de_pessoa" 
                    id="pessoa-fisica" 
                    value="pessoa-fisica"
                    checked={tipoCliente === 'pessoa-fisica'} // Set checked state
                    onChange={handleTipoClienteChange} />
                    <label for="pessoa-fisica"><MdPeopleAlt/> Pessoa Fisica</label>
                  </div>

                  <div className='gap1 row-flex-box'>
                    <input type="radio" 
                    name="tipo_de_pessoa" 
                    id="pessoa-juridica"
                    value="pessoa-juridica"
                    checked={tipoCliente === 'pessoa-juridica'} // Set checked state
                    onChange={handleTipoClienteChange}  />
                    <label for="pessoa-juridica"><FaBuilding/> Pessoa Jurídica</label>
                  </div>
                </div>
              </div>

              <div className="column-flex-box gap1 gp1-2">
                <label for="lojas">Cadastro Em</label> 
                <select name="loja" id="lojas">
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

            {tipoCliente === 'pessoa-fisica' && (
              <div className="gp2"> 
                <div className='gp2-1 column-flex-box'>
                  <label for="nome">Nome</label>
                  <input type="text" name='nome' />
                </div>

                <div className='gp2-2 column-flex-box'>
                  <label for="apelido" >Apelido</label>
                  <input type="text" name='apelido' />
                </div>

                <div className='gp2-2 column-flex-box'>
                  <label for="cpf">Sexo</label>
                  <select name="sexo" id="sexo">
                    <option value="Masculino">Masculino</option>  
                    <option value="Feminino">Femino</option>  
                    <option value="Outros">Outros</option>  
                  </select>  
                  
                </div>
              </div>
            )}

            {tipoCliente === 'pessoa-fisica' && (
              <div className="gp3"> 
                <div className='gp3-1 column-flex-box gap1'>
                  <label>RG</label>
                  <input type="text" />
                </div>

                <div className='gp3-2 column-flex-box gap1'>
                  <label for="cpf" >Cpf</label>
                  <input type="text" name='cpf' />
                </div>

                <div className='gp3-3 column-flex-box gap1'>
                  <label>Data de nascimento</label>
                  <input type="text" />
                </div>
              </div>
            )}

            {tipoCliente === 'pessoa-juridica' && (
              <div className="gp4"> 
                <div className='gp3-1 column-flex-box gap1'>
                  <label>Razão Social</label>
                  <input type="text" name='RazãoSocial' />
                </div>

                <div className='gp3-2 column-flex-box gap1'>
                  <label for="NomeFantasia" >Nome Fantasia</label>
                  <input type="text" name='NomeFantasia' />
                </div>
              </div>
            )}

            {tipoCliente === 'pessoa-juridica' && (
              <div className="gp3"> 
                <div className='gp3-1 column-flex-box gap1'>
                  <label for='CNPJ'>CNPJ</label>
                  <input type="text" name='CNPJ' />
                </div>
              </div>
            )}
        </div>

      </form>
    </div>
    
    {tipoCliente === 'pessoa-juridica' && (
    <div className="card">
      <h3>Informações Fiscais</h3>
      <hr />

      <form action="" className='formBox'>
        <div className="gp1-box" >
          <div className="gp3"> 
              <div className='gp3-1 column-flex-box gap1'>
                <label>Inscrição Estadual</label>
                <input type="text" />
              </div>

              <div className='gp3-2 column-flex-box gap1'>
                <label for="cpf" >Inscrição Municipal</label>
                <input type="text" name='cpf' />
              </div>

              <div className='gp3-3 column-flex-box gap1'>
                <label>Suframa</label>
                <input type="text" />
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