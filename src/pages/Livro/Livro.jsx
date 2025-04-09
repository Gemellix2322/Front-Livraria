import React, { useState } from "react";
import "../../css/Menu.css";
import { Link } from "react-router-dom";

const Livro = ({ livro }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Verificação de segurança
  if (!livro) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="Livro">
      <div
        className="livro-icon"
        style={{
          backgroundImage: livro.cover_image ? `url(${livro.cover_image})` : 'none',
        }}
      ></div>
      {(
        <div className="livro-details">
          <p>{livro.name || 'Sem título'}</p>
          <p>{livro.description?.length > 25 ? livro.description.slice(0, 45) + '...' : livro.description}</p>
          <div className="icon-genero">
            <Link to={`/genre/${livro.genre}`}>
            <p>{livro.genre || 'Sem Gênero'}</p>
            </Link>
          </div>          
        </div>
      )}
    </div>
  );
};

export default Livro;