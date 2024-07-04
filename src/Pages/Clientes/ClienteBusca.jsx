import React, { useState, useEffect } from 'react';
import TableSearch from '../../Componentes/Busca/TableSearch';
import Button from 'react-bootstrap/Button';

const ClienteBusca = () => {

  return (
    <>
    <div className="d-flex w-100 justify-content-between">
      <h1>Clientes</h1>
      <Button>Novo Cliente</Button>
    </div>
      <hr/>
      <TableSearch 
      routeSearch={"http://localhost:8080/clientes/pf"}
      routeDeleteNoId={"http://localhost:8080/clientes/pf/"}
      idLabel={"idCliente"}
      namePage={"Clientes"}
      />
    </>
  );
};

export default ClienteBusca;
