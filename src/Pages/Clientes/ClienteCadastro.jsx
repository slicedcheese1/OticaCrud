import DadosContatoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosContatoClienteRegistro"
import DadosEndereçoClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosEndereçoClienteRegistro"
import DadosObservacoesClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosObservacoesClienteRegistro"
import DadosPessoaisClienteRegistro from "../../Componentes/Clientes/ClienteRegistro/DadosPessoaisClienteRegistro"
import './ClienteCadastro.css'

function ClienteCadastro() {

    return (
      <>
       <form className="container2" id='ClienteCadastroForm'>
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
  