import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../styles/JobPosting.css";
import Header from "./Header";
import Footer from "./Footer";

const JobPosting = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    empresa: "",
    localizacao: "",
    tipoEmprego: "",
    salario: "",
    requisitosAdicionais: "",
    experienciaMinima: "",
    dataPublicacao: "",
    dataExpiracao: "",
    linkAplicacao: "",
    status: ""
  });
  const [vagas, setVagas] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = Cookies.get("Authorization"); // Obtenha o token dos cookies ou localStorage
      const response = await axios.post(
        "https://talentsync.click:8080/jobsposting",
        formData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      // Adicione a nova vaga à lista de vagas
      setVagas([...vagas, formData]);

      setFormData({
        titulo: "",
        descricao: "",
        empresa: "",
        localizacao: "",
        tipoEmprego: "",
        salario: "",
        requisitosAdicionais: "",
        experienciaMinima: "",
        dataPublicacao: "",
        dataExpiracao: "",
        linkAplicacao: "",
        status: ""
      });

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
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="descricao">Descrição:</label>
            <textarea
              id="descricao"
              value={formData.descricao}
              onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="empresa">Empresa:</label>
            <input
              type="text"
              id="empresa"
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="localizacao">Localização:</label>
            <input
              type="text"
              id="localizacao"
              value={formData.localizacao}
              onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="tipoEmprego">Tipo de Emprego:</label>
            <input
              type="text"
              id="tipoEmprego"
              value={formData.tipoEmprego}
              onChange={(e) => setFormData({ ...formData, tipoEmprego: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="salario">Salário:</label>
            <input
              type="text"
              id="salario"
              value={formData.salario}
              onChange={(e) => setFormData({ ...formData, salario: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="requisitosAdicionais">Requisitos Adicionais:</label>
            <textarea
              id="requisitosAdicionais"
              value={formData.requisitosAdicionais}
              onChange={(e) => setFormData({ ...formData, requisitosAdicionais: e.target.value })}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="experienciaMinima">Experiência Mínima:</label>
            <input
              type="number"
              id="experienciaMinima"
              value={formData.experienciaMinima}
              onChange={(e) => setFormData({ ...formData, experienciaMinima: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="dataPublicacao">Data de Publicação:</label>
            <input
              type="date"
              id="dataPublicacao"
              value={formData.dataPublicacao}
              onChange={(e) => setFormData({ ...formData, dataPublicacao: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="dataExpiracao">Data de Expiração:</label>
            <input
              type="date"
              id="dataExpiracao"
              value={formData.dataExpiracao}
              onChange={(e) => setFormData({ ...formData, dataExpiracao: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="linkAplicacao">Email para Aplicação:</label>
            <input
              type="email"
              id="linkAplicacao"
              value={formData.linkAplicacao}
              onChange={(e) => setFormData({ ...formData, linkAplicacao: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
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
