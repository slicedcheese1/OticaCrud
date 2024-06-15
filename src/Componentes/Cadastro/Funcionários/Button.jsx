import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="custom-button">
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
};

Button.defaultProps = {
    onClick: () => {}
};

export default Button;
