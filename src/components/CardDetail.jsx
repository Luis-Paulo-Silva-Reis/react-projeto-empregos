import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/CardDetail.css";
import Header from "./Header";
import Footer from "./Footer";

const CardDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://talentsync.click:8080/jobs/${id}`
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar dados.");
        }
        const data = await response.json();
        setItem(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!item) {
    return <div>Dados da vaga não encontrados.</div>;
  }

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
    <>
      <Header></Header>
      <div className="card-detail">
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
          <strong>Data de Publicação:</strong>{" "}
          {new Date(data_publicacao).toLocaleDateString()}
        </p>
        <p className="date">
          <strong>Data de Expiração:</strong>{" "}
          {new Date(data_expiracao).toLocaleDateString()}
        </p>
        <p className="application-link">
          <a href={`mailto:${link_aplicacao}`}>
            <strong>Email para Aplicação:</strong>
          </a>
        </p>
        <p className="status">
          <strong>Status:</strong> {status}
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CardDetail;
