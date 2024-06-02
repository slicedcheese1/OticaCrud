import React from 'react'
import { Link } from 'react-router-dom'

const Funcionário = () => {
    return (
        <>
            <div className="container">

                <label htmlFor="lojas">Cadastro Em</label>
                <select name="Funcionário cadastrado em:" >
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

                <label htmlFor="lojas">Atividade</label>
                <select name="Funcionário cadastrado em:" >
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
                <br/>
                <br/>
                <Link to = {'/Sistema/CadastroFuncionário/'} ><button>Novo funcionário</button></Link>

                <br/>
                <br/>

                <table className="customers">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Empresa</th> 
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <td>Andrey Funcionário 0</td>
                <td>DEV</td>
                <td>Loja 1</td>
              
                <td>
                <Link to={`/Sistema/ClienteBusca/`}>
                <button>Editar</button>
               </Link>
                <button>Excluir</button> 
                </td>
              </tr>
            
          </tbody>
        </table>

            </div>
        </>
    )
}

export default Funcionário
