import React from 'react';
import styles from './ButtonC.module.css'; // Importando os estilos do módulo CSS

const ButtonC = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonC;