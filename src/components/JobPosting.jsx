import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../styles/JobPosting.css";
import Header from "./Header";
import Footer from "./Footer";

const JobPosting = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [tipoEmprego, setTipoEmprego] = useState("");
  const [salario, setSalario] = useState("");
  const [requisitosAdicionais, setRequisitosAdicionais] = useState("");
  const [experienciaMinima, setExperienciaMinima] = useState("");
  const [dataPublicacao, setDataPublicacao] = useState("");
  const [dataExpiracao, setDataExpiracao] = useState("");
  const [linkAplicacao, setLinkAplicacao] = useState("");
  const [status, setStatus] = useState("");
  const [vagas, setVagas] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = Cookies.get("Authorization"); // Obtenha o token dos cookies ou localStorage
      const response = await axios.post(
        "https://talentsync.click:8080/jobsposting",
        {
          titulo,
          descricao,
          empresa,
          localizacao,
          tipoEmprego,
          salario,
          requisitosAdicionais,
          experienciaMinima,
          dataPublicacao,
          dataExpiracao,
          linkAplicacao,
          status,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      // Adicione a nova vaga à lista de vagas
      setVagas([...vagas, { titulo, descricao, empresa, localizacao, tipoEmprego, salario, requisitosAdicionais, experienciaMinima, dataPublicacao, dataExpiracao, linkAplicacao, status }]);

      setTitulo("");
      setDescricao("");
      setEmpresa("");
      setLocalizacao("");
      setTipoEmprego("");
      setSalario("");
      setRequisitosAdicionais("");
      setExperienciaMinima("");
      setDataPublicacao("");
      setDataExpiracao("");
      setLinkAplicacao("");
      setStatus("");

      alert("Vaga inserida com sucesso!");
    } catch (error) {
      alert("Erro ao inserir a vaga.");
    }
  };

  return (
    <>
      <Header />
      <div className="form-center-jobPosting">
        <form onSubmit={handleSubmit} id="jobpostingform">
          <div>
            <label htmlFor="titulo">Título:</label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="descricao">Descrição:</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="empresa">Empresa:</label>
            <input
              type="text"
              id="empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="localizacao">Localização:</label>
            <input
              type="text"
              id="localizacao"
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="tipoEmprego">Tipo de Emprego:</label>
            <input
              type="text"
              id="tipoEmprego"
              value={tipoEmprego}
              onChange={(e) => setTipoEmprego(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="salario">Salário:</label>
            <input
              type="text"
              id="salario"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="requisitosAdicionais">Requisitos Adicionais:</label>
            <textarea
              id="requisitosAdicionais"
              value={requisitosAdicionais}
              onChange={(e) => setRequisitosAdicionais(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="experienciaMinima">Experiência Mínima:</label>
            <input
              type="number"
              id="experienciaMinima"
              value={experienciaMinima}
              onChange={(e) => setExperienciaMinima(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="dataPublicacao">Data de Publicação:</label>
            <input
              type="date"
              id="dataPublicacao"
              value={dataPublicacao}
              onChange={(e) => setDataPublicacao(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="dataExpiracao">Data de Expiração:</label>
            <input
              type="date"
              id="dataExpiracao"
              value={dataExpiracao}
              onChange={(e) => setDataExpiracao(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="linkAplicacao">Link de Aplicação:</label>
            <input
              type="text"
              id="linkAplicacao"
              value={linkAplicacao}
              onChange={(e) => setLinkAplicacao(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default JobPosting;
