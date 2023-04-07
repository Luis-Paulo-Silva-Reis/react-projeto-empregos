import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      try {
        const token = Cookies.get("Authorization");
        if (token) {
          const decoded = jwt_decode(token);
          setUser(decoded);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
