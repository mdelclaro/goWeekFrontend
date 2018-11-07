import React, { Component } from "react";

import twitterLogo from "../twitter.svg";
import "./Login.css";

class Login extends Component {
  state = {
    userName: ''
  };

  handleInputChange = e => {
    this.setState({ userName: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { userName } = this.state;

    if (!userName) return;

    localStorage.setItem("@GoTwitter:username", userName);
    this.props.history.push("/timeline");
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="GoTwitter" />
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Username"
            value={this.state.userName}
            onChange={this.handleInputChange}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
