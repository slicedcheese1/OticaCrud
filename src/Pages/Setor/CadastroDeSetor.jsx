import React from 'react'
import { Link } from 'react-router-dom'

const CadastroDeSetor = () => {
    return (
        <div>
            <h1>Novo setor</h1>
            <hr />
            <label>Nome</label>
            <input placeholder='Vendedor, gerente, supervisor..' />

            <Link to={`/Sistema/setor/`}>
                <button>Voltar</button>
            </Link>

            <button>Salvar</button>


        </div>
    )
}

export default CadastroDeSetor
