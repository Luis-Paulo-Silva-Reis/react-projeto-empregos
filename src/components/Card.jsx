/* Card.jsx */
import React from "react";
import "../styles/Card.css";

const Card = ({ item }) => {
  const { titulo, descricao, empresa, status } = item;

  return (
    <div className="card-container">
      <div className="card">
        <h3>{titulo}</h3>
        <p>Descricao: {descricao}</p>
        <div className="company-info">
          <p>
            <strong>Empresa:</strong> {empresa}
          </p>
        </div>
        <p className="status">
          <strong>Status:</strong> {status}
        </p>
      </div>
      {/* Adicione os outros cards aqui */}
      <div className="card">
        <h3>{titulo}</h3>
        <p>Descricao: {descricao}</p>
        <div className="company-info">
          <p>
            <strong>Empresa:</strong> {empresa}
          </p>
        </div>
        <p className="status">
          <strong>Status:</strong> {status}
        </p>
      </div>
      <div className="card">
        <h3>{titulo}</h3>
        <p>Descricao: {descricao}</p>
        <div className="company-info">
          <p>
            <strong>Empresa:</strong> {empresa}
          </p>
        </div>
        <p className="status">
          <strong>Status:</strong> {status}
        </p>
      </div>
    </div>
  );
};

export default Card;
