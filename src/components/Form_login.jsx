import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { UserContext } from "./UserContext";
import "../styles/Form_login.css";
import Header from "./Header";
import Footer from "./Footer";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { email, password } = formData;
  const { updateUser } = useContext(UserContext);

  const COOKIE_CONFIG = {
    path: "/",
    sameSite: "lax",
  };

  const TOKEN_COOKIE_NAME = "Authorization";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://talentsync.click:8080/auth", {
        email,
        password,
      });
      const token = response.data.token;
      setCookie(TOKEN_COOKIE_NAME, `Bearer ${token}`, COOKIE_CONFIG);

      // Decodificar o token e atualizar o contexto do usuário
      const decodedUser = jwt_decode(token);
      updateUser(decodedUser);

      redirectToProtected();
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setError("Email ou senha incorretos");
    }
  };

  const redirectToProtected = async () => {
    const token = getCookie(TOKEN_COOKIE_NAME);
    const config = {
      headers: { Authorization: `${token}` },
    };
    try {
      const response = await axios.get(
        "https://talentsync.click:8080/protected",
        config
      );
      // handle response and redirect to protected route
      if (response.status === 200) {
        navigate("/protected");
      } else {
        setError("Erro ao acessar a rota protegida");
      }
    } catch (error) {
      setError("Erro ao acessar a rota protegida");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getCookie = (name) => {
    return Cookies.get(name);
  };

  const setCookie = (name, value, config) => {
    Cookies.set(name, value, config);
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <main className="login_main">
        {error && <p>{error}</p>}
        <form onSubmit={handleLogin} className="form_login_layout">
          <h2>Login</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Entrar</button>
          <br />
          <button onClick={handleGoBack}>Voltar</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default LoginForm;
