import React from "react";
import "../src/css/Menu.css"
import Livro from "./Livro";
import { Link } from "react-router-dom";

const LivrodoDia = ({ livro }) => {
    const randomIndex = Math.floor(Math.random() * livro.length);

    const livroAleatorio = livro[randomIndex];
    return(
        <div className="lista-livros">
            <h2>Livro do Dia</h2>
            <div className="linha-livros">
                <div className="livros-container">
                    <div className="linha-livros">
                    <Link to={`/livro${livro.name}`}>
                        <Livro livro={livroAleatorio}/>
                    </Link>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LivrodoDia;