import React from 'react';
import styles from './msg.module.css'; // Importando os estilos do módulo CSS

const msg = ({ mensagem }) => {
  return (
    <div className={styles.msg-body} >
      {mensagem}
    </div>
  );
};

export default msg;