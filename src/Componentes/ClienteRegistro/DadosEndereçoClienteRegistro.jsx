import ReactInputMask from 'react-input-mask'
import './DadosPessoaisClienteRegistro.css'
import { useForm } from 'react-hook-form';


function DadosEndereçoClienteRegistro() {
   const {register, setValue, setFocus} = useForm();

    const checkCEP = (e) => {
      const cep = e.target.value.replace(/\D/g, '' );
      console.log(cep);
      fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then(res => res.json()).then(data => {
        console.log(data);

        setValue('cidade', data.localidade);
        setValue('bairro', data.bairro);
        setValue('estado', data.uf);
        setValue('endereco', data.logradouro);
        setFocus('numero');

      })
    }

    return (
      <>
      
      <div className="card">
        <h3> Dados de Endereço</h3>
        <hr />

        <form action="" className='formBox'>
           <label>CEP</label>
             <ReactInputMask mask ="99999-999"
              type = "text"
              placeholder="Insira o CEP do cliente"
              onBlur={checkCEP}
            
              />

<label>Endereço</label>
             <input
              type = "text"
              placeholder=""
              {...register("endereco")}
              />

<label>Número</label>
             <input
              type = "text"
              placeholder=""
              {...register("numero")}
              />

              
           <label>Complemento</label>
             <input
              type = "text"
              placeholder=""
              {...register("complemento")}
              />

           <label>Cidade</label>
             <input
              type = "text"
              placeholder="Insira a cidade do cliente"
              {...register("cidade")}
              />

           <label>Bairro</label>
             <input
              type = "text"
              placeholder=""
              {...register("bairro")}
              />

            <label>Estado</label>
             <input
              type = "text"
              placeholder=""
              {...register("estado")}
              /> 



    
        </form>
      </div>
      </>
    )
  }
  
  export default DadosEndereçoClienteRegistro