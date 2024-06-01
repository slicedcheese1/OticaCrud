import React, { useState } from 'react';
import './DadosContatoClienteRegistro.css';
import CardContatoTelefoneClienteRegistro from './CardContatoTelefoneClienteRegistro';
import CardContatoEmailClienteRegistro from './CardContatoEmailClienteRegistro';
import ClienteContext from '../../../Pages/Clientes/ClinteContext'

const DadosContatoClienteRegistro = () => {

  const {
    cardTel, setCardTel,
    cardEmail, setCardEmail
   } = React.useContext(ClienteContext);
  
  const addTel = (event) => {
    event.preventDefault();
    const newId = cardTel.length ? cardTel[cardTel.length - 1].id + 1 : 0;
    setCardTel([...cardTel, { id: newId, component: <CardContatoTelefoneClienteRegistro id={newId} key={newId} /> }]);
    console.log(cardTel)

  };

  const addEmail = (event) => {
    event.preventDefault();
    const newId = cardEmail.length ? cardEmail[cardEmail.length - 1].id + 1 : 0;
    setCardEmail([...cardEmail, { id: newId, component: <CardContatoEmailClienteRegistro id={newId} key={newId} /> }]);
  };
   
  return (
    <div className="card">
      <h3>Dados de Contato</h3>
      <hr/>
      <div className="card-all-infos">
        <div className="card-name-button">
          <h4 className='card-name'>Telefone</h4>
          <button onClick={addTel} className="add-button-back">
            <h5 className='add-button'>Adicionar</h5>
          </button>
        </div>
        <hr />
        <div className="card-infos">
          <ul className='card-list'>
            {cardTel.map(card => (
              <li key={card.id} className='card-list-item'>{card.component}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card-all-infos">
        <div className="card-name-button">
          <h4 className='card-name'>Email</h4>
          <button onClick={addEmail} className="add-button-back">
            <h5 className='add-button'>Adicionar</h5>
          </button>
        </div>
        <hr />
        <div className="card-infos">
          <ul className='card-list'>
            {cardEmail.map(card => (
              <li key={card.id} className='card-list-item'>{card.component}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DadosContatoClienteRegistro;
