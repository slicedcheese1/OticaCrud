import React from 'react';
import styles from './msg.module.css'; // Importando os estilos do módulo CSS

const msg = ({ mensagem, nameClass}) => {
  return (
    <div className={nameClass} >
      {mensagem}
    </div>
  );
};

export default msg;