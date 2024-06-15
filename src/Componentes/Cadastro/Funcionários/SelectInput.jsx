import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ label, name, options }) => {
    return (
        <div className="select-input">
            <label htmlFor={name}>{label}</label>
            <select name={name}>
                <option value="" disabled selected>Selecione uma opção</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

SelectInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SelectInput;
