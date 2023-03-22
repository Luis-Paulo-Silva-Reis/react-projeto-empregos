import React, { Component } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import "./FormToggle.css";

class ToggleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { showForm1: true };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({ showForm1: !prevState.showForm1 }));
  }

  render() {
    const { showForm1 } = this.state;
    return (
      <div className="toggle-button-button">
        <div>
          <p>sign in </p>
          <p> sign up</p>
        </div>
        <button
          onClick={this.handleToggle}
          className={`toggle-button ${showForm1 ? "" : "on"}`}
        >
          Toggle Form
        </button>
        <div>{showForm1 ? <Form1 /> : <Form2 />}</div>
      </div>
    );
  }
}

export default ToggleForm;
