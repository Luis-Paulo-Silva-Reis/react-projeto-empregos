import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function App_header() {
  return (
    <>
      <header className="Header_layout">
        <div>
          <h1>Bem vindo ao TalentSync</h1>
        </div>
        <div>
          <nav>
            <ul className="ul">
              <li>
                <Link to="/register">sign up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default App_header;
