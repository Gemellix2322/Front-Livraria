import React from "react"
import Livros from "./Livros";
import "../src/css/Menu.css"

const ListaLivros = () => {
    return(
        <div className="lista-livros">
            <h2>Promoções de hoje</h2>
            <div className="linha-livros">
                <Livros/>
            </div>
        </div>
    )
}

export default ListaLivros;