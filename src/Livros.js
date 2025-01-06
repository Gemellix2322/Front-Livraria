import React, {useState} from "react";
import { Link } from "react-router-dom";
import Livro from "./Livro.js";
import "../src/css/Menu.css"

const Livros = ({ livro }) => {
    return (
        <div className="lista-livros">
            <h2>Livros Disponíveis</h2>
            <ul className="linha-livros">
                {livro.map((l, index) => {
                    return(
                    <li key={index}>
                        <Link to={`/livro${livro.name}`}>
                            <Livro livro={l}/>
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Livros;