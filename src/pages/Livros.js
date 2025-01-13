import React from "react";
import { Link } from "react-router-dom";
import Livro from "./Livro.js";
import "../css/Menu.css"

const Livros = ({ livro }) => {
    const linkPath = '/livrodetails'
    // Verificação de segurança
    if (!Array.isArray(livro) || livro.length === 0) {
        return <div>Carregando livros...</div>;
    }

    return (
        <div className="lista-livros">
            <h2>Livros Disponíveis</h2>
            <ul className="linha-livros">
                {livro.map((l) => {
                    return(
                    <li key={l.id}>
                        <Link to={`/livrodetails/${l.name}`}>
                            <Livro livro={l} />
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Livros;