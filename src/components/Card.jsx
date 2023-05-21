import React from "react";
import "../styles/Card.css";

const Card = ({ item, index }) => (
  <div className="card" key={index}>
    <h3>{item.titulo}</h3>
    <p>Descricao: {item.descricao}</p>
    <div className="company-info">
      <p className="location">
        <strong>Localização:</strong> {item.localizacao}
      </p>
      <p>
        <strong>Empresa:</strong> {item.empresa}
      </p>
      <p>
        <strong>Tipo de Emprego:</strong> {item.tipo_emprego}
      </p>
      <p className="salary">
        <strong>Salário:</strong> {item.salario}
      </p>
    </div>
    <p className="additional-requirements">
      <strong>Requisitos Adicionais:</strong> {item.requisitos_adicionais}
    </p>
    <p className="experience">
      <strong>Experiência Mínima:</strong> {item.experiencia_minima}
    </p>
    <p className="date">
      <strong>Data de Publicação:</strong> {item.data_publicacao}
    </p>
    <p className="date">
      <strong>Data de Expiração:</strong> {item.data_expiracao}
    </p>
    <p className="application-link">
      <strong>Link de Aplicação:</strong>{" "}
      <a href={item.link_aplicacao}>{item.link_aplicacao}</a>
    </p>
    <p className="status">
      <strong>Status:</strong> {item.status}
    </p>
  </div>
);

export default Card;
