import React from "react";
import { Link } from "react-router-dom";
import Livro from "./Livro.js";
import "../src/css/Menu.css"

const Livros = ({ livro }) => {
    // Verificação de segurança
    if (!Array.isArray(livro) || livro.length === 0) {
        return <div>Carregando livros...</div>;
    }

    return (
        <div className="lista-livros">
            <h2>Livros Disponíveis</h2>
            <ul className="linha-livros">
                {livro.map((l, index) => (
                    <li key={l.id || index}>
                        <Link to={`/livro/${l.name}`}>
                            <Livro livro={l}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Livros;