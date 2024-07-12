import React from 'react';
import { Percent, Ruler } from 'react-bootstrap-icons'; 
import './CardGrupos2.css';

const IconCheckbox = ({ Icon, label }) => {
  return (
    <div>
      <label htmlFor={label}>
        <input className="Check" type="checkbox" id={label} />
        <span>
          <Icon className="me-2" />
          {label}
        </span>
      </label>
    </div>
  );
};

export default IconCheckbox;
