import DadosEndereçoClienteRegistro from "../Componentes/ClienteRegistro/DadosEndreçoClienteRegistro"
import DadosObservacoesClienteRegistro from "../Componentes/ClienteRegistro/DadosObservacoesClienteRegistro"
import DadosPessoaisClienteRegistro from "../Componentes/ClienteRegistro/DadosPessoaisClienteRegistro"


function Clientes() {
  
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
  
  export default Clientes
  