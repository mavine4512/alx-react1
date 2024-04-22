import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  return (
    <div className={css(loginStyles.login)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label typeof="email">Email:</label>
        <input
          type="email"
          id="enter email"
          className={css(loginStyles.loginInput)}
        />
        <label typeof="password">Password:</label>
        <input
          type="password"
          id="password"
          className={css(loginStyles.loginInput)}
        />
      </form>
      <button>OK</button>
    </div>
  );
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
