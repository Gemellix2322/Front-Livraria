import React from "react";
import "./Menu.css"

const Livro = ({livro}) => {
    return (
        <div className="Livro">
            <div
                className="livro-icon"
                style={{backgroundImage: `url(${livro.image})`}}
            ></div>
            <div className="livro-details">
                <p>{livro.name}</p>
            </div>
        </div>
    );
};

export default Livro;
