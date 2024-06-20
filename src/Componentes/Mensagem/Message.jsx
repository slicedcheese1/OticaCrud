import React from 'react';
import styles from './Message.module.css'; // Importando os estilos do módulo CSS

const Message = ({ mensage, nameClass}) => {
  return (
    <div className={styles[nameClass]} >
      {mensage}
    </div>
  );
};

export default Message;