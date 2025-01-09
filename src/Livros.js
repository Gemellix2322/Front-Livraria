import React from "react";
import { Link } from "react-router-dom";
import Livro from "./Livro.js";
import "../src/css/Menu.css"

const Livros = ({ livro }) => {
    const linkPath = '/livrodetails'
    // Verificação de segurança
    if (!Array.isArray(livro) || livro.length === 0) {
        return <div>Carregando livros...</div>;
    }

    return (
        <div className="lista-livros">
            <Link to={`/livrodetails/${livro[0].id}`}>
                <Livro livro={livro[0]} />
            </Link>
            <h2>Livros Disponíveis</h2>
            <ul className="linha-livros">
                {livro.map((l) => {
                    console.log(l)
                    return(
                    <li key={l.id}>
                        <a href={'/caguei'}>
                            <Livro livro={l} />
                        </a>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Livros;