import './DadosPessoaisClienteRegistro.css'

function DadosEndereçoClienteRegistro() {
    return (
      <>
      
      <div className="card">
        <h3> Dados de Endereço</h3>
        <hr />

        <form action="" className='formBox'>
           <label>CEP</label>
             <input
              type = "text"
              placeholder="Insira o CEP do cliente"
              />

           <label>Cidade</label>
             <input
              type = "text"
              placeholder="Insira a cidade do cliente"
              />

           <label>Bairro</label>
             <input
              type = "text"
              placeholder=""
              />

           <label>Endereço</label>
             <input
              type = "text"
              placeholder=""
              />

           <label>Número</label>
             <input
              type = "text"
              placeholder=""
              />

           <label>Complemento</label>
             <input
              type = "text"
              placeholder=""
              />
        </form>
      </div>
      </>
    )
  }
  
  export default DadosEndereçoClienteRegistro