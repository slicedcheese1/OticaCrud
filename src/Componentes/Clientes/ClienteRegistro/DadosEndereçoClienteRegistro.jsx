import ReactInputMask from 'react-input-mask'
import './DadosEndereçoClienteRegistro.css'
import { useForm } from 'react-hook-form';
import ClienteContext from '../../../Pages/Clientes/ClinteContext';
import React from 'react';

function DadosEndereçoClienteRegistro() {

  const {
    cep, setCep, 
    cidade, setCidade, 
    estado, setEstado, 
    rua, setRua, 
    numeroCasa, setCasa, 
    bairro, setBairro
  } = React.useContext(ClienteContext);

  const { register, setValue, setFocus } = useForm();

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then(res => res.json()).then(data => {
        console.log(data);

        setValue('cidade', data.localidade);
        setValue('bairro', data.bairro);
        setValue('estado', data.uf);
        setValue('rua', data.logradouro);
        setFocus('numero');

      })
  }

  return (
    <>

      <div className="card">
        <h3> Dados de Endereço</h3>
        <hr />

        <div id="form-endereco" className='formBox' method="post">
          <div className="gp1">
            <div className="gp1-1">
              <label for="cep">CEP</label>
              <ReactInputMask mask="99999-999"
                type="text"
                placeholder="Insira o CEP do cliente"
                onBlur={checkCEP}
                name="cep"
                value={cep}
              />
            </div>

            <div className="gp1-1">

              <label htmlFor="estado">Estado</label>
              <input
                type="text"
                placeholder=""
                {...register("estado")}
                name="estado"
                value={estado}

              />
            </div>

            <div className="gp1-1">
              <label htmlFor="rua">Rua</label>
              <input
                type="text"
                placeholder=""
                {...register("rua")}
                name="rua"
                value={rua}

              />
            </div> 

            <div className="gp1-1">
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                placeholder="Insira a cidade do cliente"
                {...register("cidade")}
                name="cidade"
                value={cidade}

              />
            </div>

          </div>

          <div className="gp1">
            <div className='gp2-1'>
              <label htmlFor="bairro">Bairro</label>
              <input
                type="text"
                placeholder=""
                {...register("bairro")}
                name="bairro"
                value={bairro}

              />
            </div>

            <div className='gp2-1'>
              <label htmlFor="numero">Número</label>
              <input
                type="text"
                placeholder=""
                {...register("numero")}
                name="numero"
                value = {numeroCasa}
              />
            </div>

            {/* <div className='gp2-1'>
              <label for="complemento">Complemento</label>
              <input
                type="text"
                placeholder=""
                {...register("complemento")}
                name="complemento"
                value = {numeroCasa}

              />
            </div> */}
          </div>

        </div>
      </div>
    </>
  )
}

export default DadosEndereçoClienteRegistro