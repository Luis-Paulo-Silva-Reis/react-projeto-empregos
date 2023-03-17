import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedPage = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = Cookies.get("Authorization");
        const api = axios.create({
          headers: {
            Authorization: token,
          },
        });
        const response = await api.get("http://localhost:3000/protected");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProtectedData();
  }, []);

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
    </div>
  );
};

export default ProtectedPage;
