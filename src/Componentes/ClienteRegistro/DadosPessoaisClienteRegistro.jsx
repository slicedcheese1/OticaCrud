import './DadosPessoaisClienteRegistro.css'
import { MdPeopleAlt } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

function DadosPessoaisClienteRegistro() {
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

          <div className="gp1-box">
              <div className="gp1"> 
                <div className="column-flex-box gap1">
                  <label>Tipo de Cliente</label>
                  <div className="gp1-1 row-flex-box gap1">
                  <input type="radio" name="tipo_de_pessoa" id="pessoa-fisica" />
                  <label for="pessoa-fisica"><MdPeopleAlt/> Pessoa Fisica</label>

                  <input type="radio" name="tipo_de_pessoa" id="pessoa-juridica"  />
                  <label for="pessoa-fisica"><FaBuilding/> Pessoa Jurídica</label>
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

              <div className="gp2"> 
                <div className='gp2-1 column-flex-box'>
                  <label>Nome</label>
                  <input type="text" />
                </div>

                <div className='gp2-2 column-flex-box'>
                  <label>Cpf</label>
                  <input type="text" />
                </div>
              </div>

              <div className="gp3"> 
                <div className='gp3-1 column-flex-box'>
                  <label>RG</label>
                  <input type="text" />
                </div>

                <div className='gp3-2 column-flex-box'>
                  <label>Data de nascimento</label>
                  <input type="text" />
                </div>
              </div>
          </div>

        </form>
      </div>
      
      </>
    )
  }
  
  export default DadosPessoaisClienteRegistro
  