import './DadosPessoaisClienteRegistro.css'

function DadosPessoaisClienteRegistro() {
    return (
      <>
      
      <div className="card">
        <h3>Dados Pessoais</h3>
        <hr />

        <form action="" className='formBox'>
          <div className="photoBox">
            <h1>foto</h1>
          </div>

          <div className="row-flex-box">
            <div className="column-flex-box">
              <label>Ativo</label>
              <input type="checkbox" name="" id="" /> 
            </div>
            
            <div className="column-flex-box">
              <h5>Tipo de Cliente</h5>
              <div className="row-flex-box">
              <input type="checkbox" name="" id="" />
              <label>Pessoa física</label>
              <input type="checkbox" name="" id="" />
              <label>Pessoa Jurídica</label>
              </div>
            </div>
            
          </div>
          
        </form>
    
      </div>
      <br/>
      
      </>
    )
  }
  
  export default DadosPessoaisClienteRegistro
  