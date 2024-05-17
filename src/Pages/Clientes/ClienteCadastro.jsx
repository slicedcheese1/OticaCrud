import DadosContatoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosContatoClienteRegistro"
import DadosEndereçoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosEndereçoClienteRegistro"
import DadosObservacoesClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosObservacoesClienteRegistro"
import DadosPessoaisClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosPessoaisClienteRegistro"
import './ClienteCadastro.css'

function ClienteCadastro() {

    return (
      <>
       <form action="http://localhost:8080/clientes/pf" method="POST" className="container2">
          <DadosPessoaisClienteRegistro/>
          <DadosEndereçoClienteRegistro/>
          <DadosContatoClienteRegistro/>
          <DadosObservacoesClienteRegistro/>
          <button type="submit">Salvar</button>
       </form>
      </>
    )
  }
  
  export default ClienteCadastro
  