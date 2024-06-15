import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './TabelaClientes.css';

function CardTabela() {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container-busca">
      <div className="busca-row">
        <label id="Busca" htmlFor="search">Buscar um cliente</label>
        <div className="input-button-group">
          <input
            id="search"
            placeholder="Procure por Nome, CPF, CNPJ"
            type="text"
            onChange={handleSearch}
            value={search}
          />
          <button onClick={() => console.log('Botão clicado!')}>
            <FaSearch style={{ marginRight: '5px' }} /> Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardTabela;
