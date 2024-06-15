import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button.jsx'
const Table = ({ headers, rows }) => {
    return (
        <table className="customers">
            <thead>
                <tr>
                    {headers.map(header => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                        <td>
                            <Link to={`/Sistema/ClienteBusca/`}>
                                <Button>Editar</Button>
                            </Link>
                            <Button>Excluir</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

export default Table;
