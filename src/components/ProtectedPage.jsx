import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "./UserContext";

const ProtectedPage = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = Cookies.get("Authorization");
        const api = axios.create({
          headers: {
            Authorization: token,
          },
        });
        const response = await api.get(
          "https://talentsync.click:8080/protected"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProtectedData();
  }, [user]);

  const handleLogout = () => {
    Cookies.remove("Authorization");
    navigate("/");
  };

  return (
    <div>
      <h1>Protected Page</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
      <button onClick={handleLogout}>Logout</button>
      <br />
      <Link to="/">Back to Home</Link>
      <Outlet />

      <Link to="/jobsposting">
        <button>Registrar vagas</button>
      </Link>

      <hr />
      <h1>Página Protegida</h1>
      {user ? (
        <div>
          <p>Bem-vindo, {user.name}!</p>
          <p>Seu e-mail é {user.email}.</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ProtectedPage;
