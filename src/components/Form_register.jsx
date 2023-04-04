import "../styles/Form_register.css";
import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", status: "" });

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    fetch("http://34.232.202.87:3000/register", {
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

  return (
    <form onSubmit={handleSubmit} className="form_register_layout_main">
      <div className="form_register_layout">
        <h2>Formulario de cadastro</h2>
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
      </div>
    </form>
  );
}

export default UserForm;
