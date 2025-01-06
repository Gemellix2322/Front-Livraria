import React, {useState} from "react";
import Livro from "./Livro.js";
import "../src/css/Menu.css"

const Livros = ({livro}) => {
    if (!Array.isArray(livro)) {
        return <div>Erro: 'livro' não é um array!</div>;
    }
    return (
        <div className="lista-livros">
            <h2>Livros Disponíveis</h2>
            <ul className="linha-livros">
                {livro.map((l, index) => {
                    return(
                    <li key={index}>
                        <Livro livro={l}/>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Livros;