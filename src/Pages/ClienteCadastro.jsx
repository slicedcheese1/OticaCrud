import DadosContatoClienteRegistro from "../Componentes/ClienteRegistro/DadosContatoClienteRegistro"
import DadosEndereçoClienteRegistro from "../Componentes/ClienteRegistro/DadosEndereçoClienteRegistro"
import DadosObservacoesClienteRegistro from "../Componentes/ClienteRegistro/DadosObservacoesClienteRegistro"
import DadosPessoaisClienteRegistro from "../Componentes/ClienteRegistro/DadosPessoaisClienteRegistro"
import './ClienteCadastro.css'

function ClienteCadastro() {
  
    return (
      <>
       <div className="container2">
        <DadosPessoaisClienteRegistro/>
        <DadosEndereçoClienteRegistro/>
        <DadosContatoClienteRegistro/>
        <DadosObservacoesClienteRegistro/>

       </div>
      </>
    )
  }
  
  export default ClienteCadastro
  