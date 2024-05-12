import DadosEndereçoClienteRegistro from "../Componentes/ClienteRegistro/DadosEndereçoClienteRegistro"
import DadosObservacoesClienteRegistro from "../Componentes/ClienteRegistro/DadosObservacoesClienteRegistro"
import DadosPessoaisClienteRegistro from "../Componentes/ClienteRegistro/DadosPessoaisClienteRegistro"


function ClienteCadastro() {
  
    return (
      <>
       <div className="container">
        <DadosPessoaisClienteRegistro/>
        <DadosEndereçoClienteRegistro/>
        <DadosObservacoesClienteRegistro/>
       </div>
      </>
    )
  }
  
  export default ClienteCadastro
  