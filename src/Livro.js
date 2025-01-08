import React, { useState } from "react";
import "../src/css/Menu.css";

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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
      {isHovered && (
        <div className="livro-details">
          <p>{livro.name || 'Sem título'}</p>
          <p>{livro.description || 'Sem descrição'}</p>
        </div>
      )}
    </div>
  );
};

export default Livro;