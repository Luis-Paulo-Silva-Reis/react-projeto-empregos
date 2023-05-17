import "../styles/Form_register.css";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", status: "" });

  const navigate = useNavigate(); // Inicialize o hook useNavigate

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    fetch("https://talentsync.click:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erro ao cadastrar usuário");
        }
      })
      .then((data) => {
        setMessage({
          text: "Usuário cadastrado com sucesso",
          status: "success",
        });
      })
      .catch((error) => {
        setMessage({
          text: "Erro ao cadastrar usuário: " + error.message,
          status: "error",
        });
      });

    setName("");
    setEmail("");
    setPassword("");
  }

  const handleGoBack = () => {
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit} className="form_register_layout_main">
        <div className="form_register_layout">
          <h2>Formulário de cadastro</h2>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Senha:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Cadastrar</button>
          {message.text && (
            <div className={`message ${message.status}`}>{message.text}</div>
          )}
          <br />
          <button onClick={handleGoBack}>Voltar</button> {/* Botão de voltar */}
        </div>
      </form>
      <Footer></Footer>
    </>
  );
}

export default UserForm;
