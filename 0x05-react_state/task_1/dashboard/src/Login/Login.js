import React from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component() {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  };

  handleChangeEmail = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value }, this.handleEnableSubmit);
  };

  handleChangePassword = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value }, this.handleEnableSubmit);
  };

  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <div className={css(loginStyles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label typeof="email">Email: </label>
          <input
            type="email"
            id="email"
            className={css(loginStyles.inputs)}
            value={email}
            onChange={this.handleChangeEmail}
          />
          <label typeof="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className={css(loginStyles.inputs)}
            value={password}
            onChange={this.handleChangePassword}
          />
          <input
            type="submit"
            value="OK"
            disabled={enableSubmit ? false : true}
          />
        </form>
      </div>
    );
  }
}

const loginStyles = StyleSheet.create({
  appBody: {
    padding: "36px 24px",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  inputs: {
    margin: "0, 16px 0 8px",
  },
});

export default Login;
