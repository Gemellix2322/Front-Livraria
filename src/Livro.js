import React, { useState } from "react";
import "../src/css/Menu.css";

const Livro = ({ livro }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="Livro">
      <div
        className="livro-icon"
        style={{
          backgroundImage: `url(${livro.image})`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
      {isHovered && (
        <div className="livro-details">
          <p>{livro.name}</p>
          <p>{livro.description}</p>
        </div>
      )}
    </div>
  );
};

export default Livro;
