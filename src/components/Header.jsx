import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import LogoutButton from "./LogoutButton";

function AppHeader() {
  const isAuthenticated = !!document.cookie.includes("Authorization");
  const location = useLocation();
  const isProtectedRoute = location.pathname === "/protected";
  const handleClick = (e) => {
    if (isProtectedRoute) {
      e.preventDefault();
    }
  };

  return (
    <header className="Header_layout">
      <div>
        <Link to="/">
          <h1>TalentSync</h1>
        </Link>
      </div>
      <div>
        <nav>
          <ul className="ul">
            {isAuthenticated ? (
              <>
                <li className={isProtectedRoute ? "disabled" : ""}ß>
                  <Link
                    to="/protected"
                    onClick={handleClick}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <LogoutButton></LogoutButton>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
