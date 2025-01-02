import React, {useState} from "react";
import Livro from "./Livro.js";
import "../src/css/Menu.css"

const Livros = () => {
    const [livro, useLivro] = useState([
        {
            name: "Da certo",
            image: require("./img/download.jpg"),
        },
        {
            name: "Por favor",
            image: require("./img/images.jpg"),
        },
        {
            name: "AAAAAAAA",
            image: require("./img/capa.jpg"),
        },
        {
            name: "AEEEEEEEE",
            image: require("./img/vermelho.jpg"),
        },
        
    ]);
    

    return (
        <div className="livros-container">
            <ul className="linha-livros">
                {livro.map((livro, index) => {
                    return(
                    <li key={index}>
                        <Livro livro={livro}/>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Livros;