import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import '../styles/JobPosting.css'

const JobPosting = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = Cookies.get("Authorization"); // Obtenha o token dos cookies ou localStorage
      const response = await axios.post(
        "http://3.88.66.225:8080/jobsposting",
        { titulo, descricao },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      alert("Vaga inserida com sucesso!");
    } catch (error) {
      alert("Erro ao inserir a vaga.");
    }
  };

  return (
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
  );
};

export default JobPosting;
