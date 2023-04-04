import React, { useState } from "react";
import LoginForm from "./Form_login";
import UserForm from "./Form_register";
import "../styles/FormToggle.css";

function ToggleForm() {
  const [showForm1, setShowForm1] = useState(true);

  const handleToggle = () => {
    setShowForm1((prevState) => !prevState);
  };

  return (
    <div className="toggle-button-button">
      <div className="row">
        <div>
          <p>log in</p>
          <p>sign up</p>
        </div>

        <button
          onClick={handleToggle}
          className={`toggle-button ${showForm1 ? "" : "on"}`}
        ></button>
        <br />
      </div>
      <div className="form-container">{showForm1 ? <LoginForm /> : <UserForm />}</div>
    </div>
  );
}

export default ToggleForm;
  