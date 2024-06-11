// Text.js
import React from 'react';
import PropTypes from 'prop-types';


const Text = ({ children, fontSize }) => {
  return (
    <span className="custom-text" style={{ fontSize }}>
      {children}
    </span>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
};

Text.defaultProps = {
  fontSize: '16px', // Tamanho padrão da fonte, caso não seja fornecido
};

export default Text;
