import React from "react";
import "../styles/Card.css";

const Card = ({ item }) => {
  const {
    titulo,
    descricao,
    localizacao,
    empresa,
    tipo_emprego,
    salario,
    requisitos_adicionais,
    experiencia_minima,
    data_publicacao,
    data_expiracao,
    link_aplicacao,
    status,
  } = item;

  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>Descricao: {descricao}</p>
      <div className="company-info">
        <p className="location">
          <strong>Localização:</strong> {localizacao}
        </p>
        <p>
          <strong>Empresa:</strong> {empresa}
        </p>
        <p>
          <strong>Tipo de Emprego:</strong> {tipo_emprego}
        </p>
        <p className="salary">
          <strong>Salário:</strong> {salario}
        </p>
      </div>
      <p className="additional-requirements">
        <strong>Requisitos Adicionais:</strong> {requisitos_adicionais}
      </p>
      <p className="experience">
        <strong>Experiência Mínima:</strong> {experiencia_minima}
      </p>
      <p className="date">
        <strong>Data de Publicação:</strong> {data_publicacao}
      </p>
      <p className="date">
        <strong>Data de Expiração:</strong> {data_expiracao}
      </p>
      <p className="application-link">
        <strong>Link de Aplicação:</strong>{" "}
        <a href={link_aplicacao}>{link_aplicacao}</a>
      </p>
      <p className="status">
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
};

export default Card;
