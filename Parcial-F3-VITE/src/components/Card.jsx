import React from "react";

const Card = ({ banda1, banda2 }) => {
  return (
    <div>
      <h2>Escribe dos de tus bandas favoritas:</h2>
      <p>Banda 1: {banda1}</p>
      <p>Banda 2: {banda2}</p>
    </div>
  );
};

export default Card;
