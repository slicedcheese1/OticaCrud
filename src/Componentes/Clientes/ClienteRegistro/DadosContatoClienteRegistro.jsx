import React, { useState } from 'react';
import styles from './DadosContatoClienteRegistro.module.css';
import CardContatoTelefoneClienteRegistro from './CardContatoTelefoneClienteRegistro';
import CardContatoEmailClienteRegistro from './CardContatoEmailClienteRegistro';
import CardContatoResponsavel from './CardContatoResponsavel';
import ClienteContext from '../../../Pages/Clientes/ClinteContext'

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const DadosContatoClienteRegistro = () => {

  const {
    cardTel, setCardTel,
    cardEmail, setCardEmail,
    showingCardResponsavel, setShowingCardResponsavel
   } = React.useContext(ClienteContext);
  
  const addTel = (event) => {
    event.preventDefault();
    const newId = cardTel.length ? cardTel[cardTel.length - 1].id + 1 : 0;
    setCardTel([...cardTel, { id: newId, component: <CardContatoTelefoneClienteRegistro id={newId} key={newId} /> }]);
    console.log(cardTel)

  };

  function invertCardResponsavel(e) {
    e.preventDefault()
    setShowingCardResponsavel(!showingCardResponsavel)
  }

  const addEmail = (event) => {
    event.preventDefault();
    const newId = cardEmail.length ? cardEmail[cardEmail.length - 1].id + 1 : 0;
    setCardEmail([...cardEmail, { id: newId, component: <CardContatoEmailClienteRegistro id={newId} key={newId} /> }]);
  };
   
  return (
    <Card className='p-4'>
    <h3>Dados de Contato</h3>
    <hr/>
      <div className='d-flex flex-column gap-4'>
        <Card>
          <div className={` ${styles.cardNameButton} d-flex align-middle ` }>
            <h4 className={`${styles.cardName} mb-0  `}>Telefone</h4>
            <div className={`gap-1 d-flex `}>
              <Button onClick={(e) => invertCardResponsavel(e)} variant='secondary' >
                Responsável
              </Button>
              <Button onClick={addTel} variant='success'>
              Adicionar
              </Button>
            </div>
          </div>
          <div className={` ${styles.cardInfos} m-4`}>
            {showingCardResponsavel && ( 
              <CardContatoResponsavel/>
            )}
            <ul className={styles.cardList}>
              {cardTel.map(card => (
                <li key={card.id} className={styles.cardListItem}>{card.component}</li>
              ))}
            </ul>
          </div>
        </Card>
      
        <Card>
          <div className={` ${styles.cardNameButton} d-flex align-middle ` }>
            <h4 className={` ${styles.cardName} mb-0 `}>Email</h4>
            <Button onClick={addEmail} variant='success'>
              Adicionar
            </Button>
          </div>
          <div className={` ${styles.cardInfos} m-4`}>
            <ul className={styles.cardList}>
              {cardEmail.map(card => (
                <li key={card.id} className={styles.cardListItem}>{card.component}</li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
  </Card>
  );
}

export default DadosContatoClienteRegistro;
