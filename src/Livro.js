import React, { useState } from "react";
import "./Menu.css";

const Livro = ({ livro }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="Livro">
      <div
        className="livro-icon"
        style={{
          backgroundImage: `url(${livro.image})`,
          transform: isHovered ? "scale(1.2)" : "scale(1)",
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

