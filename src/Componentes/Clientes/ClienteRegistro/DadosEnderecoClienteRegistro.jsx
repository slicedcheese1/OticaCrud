import React from 'react';
import ReactInputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { CiSearch } from "react-icons/ci";
import ClienteContext from '../../../Pages/Clientes/ClinteContext';
import styles from './DadosEnderecoClienteRegistro.module.css';
import Card from "react-bootstrap/Card"
function DadosEndereçoClienteRegistro() {

  const {
    cep, setCep, 
    cidade, setCidade, 
    estado, setEstado, 
    rua, setRua, 
    numeroCasa, setCasa, 
    bairro, setBairro
  } = React.useContext(ClienteContext);

  const { register, setValue } = useForm();

  const checkCEP = (e) => {
    e.preventDefault();
    const ceplimpo = cep.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${ceplimpo}/json`)
      .then(res => res.json()).then(data => {
        setValue('estado', data.uf);
        setValue('cidade', data.localidade);
        setValue('bairro', data.bairro);
        setValue('rua', data.logradouro);
      })
  }

  return (
    <>
      <Card className="p-4">
        <h3> Dados de Endereço</h3>
        <hr />

        <div id="form-endereco" className={styles.formBoxEndereco} method="post">
          <div className={styles.gp3}>
            <div className={styles.gp3_1}>
              <label id="label-cep" htmlFor="cep">CEP</label>
              <div className={styles.buscaCep}>
                <ReactInputMask className={styles.input} mask="99999-999"
                  type="text"
                  placeholder="Insira o CEP do cliente"
                  name="cep"
                  value={cep}
                  onChange={(e) => {setCep(e.target.value)}}
                />
                <button type="button" onClick={checkCEP}><CiSearch /></button>
              </div>
            </div>

            <div className={styles.gp3_1}>
              <label id="label-estado" htmlFor="estado">Estado</label>
              <select {...register("estado")} name="estado" id="estados" onChange={(e) => {setEstado(e.target.value)}} value={estado}>
                <option value="" disabled selected>Selecione um estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>

            <div className={styles.gp3_1}>
              <label id="label-cidade" htmlFor="cidade">Cidade</label>
              <input
                type="text"
                placeholder=""
                {...register("cidade")}
                name="cidade"
                value={cidade}
                onChange={(e) => {setCidade(e.target.value)}}
              />
            </div>
          </div>

          <div className={styles.gp3}>
            <div className={styles.gp3_1}>
              <label id="label-bairro" htmlFor="bairro">Bairro</label>
              <input
                type="text"
                placeholder=""
                {...register("bairro")}
                name="bairro"
                value={bairro}
                onChange={(e) => {setBairro(e.target.value)}}
              />
            </div>
   
            <div className={styles.gp3_1}>
              <label id="label-rua" htmlFor="rua">Rua</label>
              <input
                type="text"
                placeholder=""
                {...register("rua")}
                name="rua"
                value={rua}
                onChange={(e) => {setRua(e.target.value)}}
              />
            </div> 

            <div className={styles.gp3_1}>
              <label id="label-numero" htmlFor="numero">Número</label>
              <input
                type="text"
                name="numero"
                value={numeroCasa}
                onChange={(e) => {setCasa(e.target.value)}}
              />
            </div>
          
          </div>
        </div>
      </Card>
    </>
  )
}

export default DadosEndereçoClienteRegistro;
