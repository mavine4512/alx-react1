import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  return (
    <div className={css(loginStyles.appBody)}>
      <p>Login to access the full dashboard</p>
      <label typeof="email">Email:</label>
      <input
        type="email"
        id="enter email"
        className={css(loginStyles.inputs)}
      />
      <label typeof="password">Password:</label>
      <input
        type="password"
        id="password"
        className={css(loginStyles.inputs)}
      />
      <button>OK</button>
    </div>
  );
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
