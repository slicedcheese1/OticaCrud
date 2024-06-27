import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Pagination1 = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination>
            {pageNumbers.map(number => (
                <Pagination.Item key={number} onClick={() => paginate(number)}>
                    {number}
                </Pagination.Item>
            ))}
        </Pagination>
    );
};

export default Pagination1;
