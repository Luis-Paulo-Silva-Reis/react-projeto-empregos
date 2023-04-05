import React from "react";

const Card = ({ item, index }) => (
  <div className="card" key={index}>
    <h3>{item.titulo}</h3>
    <p>{item.descricao}</p>
  </div>
);

export default Card;
