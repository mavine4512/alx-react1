import React from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
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
    this.props.logIn(this.state.email, this.state.password);
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
    return (
      <div className={css(loginStyles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label typeof="email">Email:</label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            className={css(loginStyles.loginInput)}
            onChange={this.handleChangeEmail}
          />
          <label typeof="password">Password:</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            className={css(loginStyles.loginInput)}
            onChange={this.handleChangePassword}
          />
          <input
            type="submit"
            value="OK"
            disabled={this.state.enableSubmit ? false : true}
          />
        </form>
      </div>
    );
  }
}

const screenSize = {
  small: "@media screen and (min-width: 900px)",
};
const loginStyles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
    [screenSize.small]: {
      marginTop: "10px",
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
    },
  },
  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginBottom: "10px",
      marginTop: "10px",
    },
  },
});

export default Login;
