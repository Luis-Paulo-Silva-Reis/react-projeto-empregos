import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../styles/JobPosting.css";
import JobCard from "./JobCard";
import Header from "./Header";
import Footer from "./Footer";

const JobPosting = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [vagas, setVagas] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = Cookies.get("Authorization"); // Obtenha o token dos cookies ou localStorage
      const response = await axios.post(
        "https://talentsync.click:8080/jobsposting",
        { titulo, descricao },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      // Adicione a nova vaga à lista de vagas
      setVagas([...vagas, { titulo, descricao }]);

      setTitulo("");
      setDescricao("");

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
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default JobPosting;
