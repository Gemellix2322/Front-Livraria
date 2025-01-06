import React from "react"
import Livros from "./Livros";
import "../src/css/Menu.css"
import Livro from "./Livro";

const LivrodoDia = ({livro}) => {
    const randomIndex = Math.floor(Math.random() * livro.length);

    const livroAleatorio = livro[randomIndex];
    return(
        <div className="lista-livros">
            <h2>Livro do Dia</h2>
            <div className="linha-livros">
                <div className="livros-container">
                    <div className="linha-livros">
                        <Livro livro={livroAleatorio}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LivrodoDia;