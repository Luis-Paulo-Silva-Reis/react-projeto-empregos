import React, { useState } from "react";
import axios from "axios";

const Login_for_Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth", {
        email,
        password,
      });
      const token = response.data.token;
      console.log(token);
      // Armazene o token em localStorage ou faça qualquer outra coisa com ele aqui
    } catch (error) {
      setError("Email ou senha incorretos");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login_for_Auth;
