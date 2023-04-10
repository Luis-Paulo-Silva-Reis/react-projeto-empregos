import React from "react";
import { UserContext } from "./UserContext";
import Cookies from "js-cookie";
const UserProfile = ({ userData }) => {
  
  const { user } = useContext(UserContext);

  return (
    <div className="user-profile">
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

export default UserProfile;
