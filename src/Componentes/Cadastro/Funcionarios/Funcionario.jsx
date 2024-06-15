import React from 'react';
import { Link } from 'react-router-dom';
import SelectInput from './SelectInput.jsx';
import Button from './Button.jsx';
import Table from './Table.jsx';
import './Funcionario.css';

const Funcionario = () => {
    const lojaOptions = ["Loja 01", "Loja 02", "Loja 03", "Loja 04", "Loja 05", "Loja 06", "Loja 07", "Loja 08", "Loja 09", "Loja 10"];
    const atividadeOptions = lojaOptions; 
    const tableHeaders = ["Nome", "Cargo", "Empresa", "Ações"];
    const tableRows = [
        ["Andrey Funcionário 0", "DEV", "Loja 1"]
    ];

    return (
        <div className="container">
            <SelectInput label="Cadastro Em" name="lojas" options={lojaOptions} />
            <SelectInput label="Atividade" name="atividade" options={atividadeOptions} />
            <br />
            <Link to='/Sistema/CadastroFuncionário/'>
                <Button>Novo funcionário</Button>
            </Link>
            <br /><br />
            <Table headers={tableHeaders} rows={tableRows} />
        </div>
    );
};

export default Funcionario;
