import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  return (
    <div className={css(styles["App-body"])}>
      <p>Login to access the full dashboard</p>
      <form>
        <label typeof="email">Email:</label>
        <input type="email" id="enter email" className={css(styles.input)} />
        <label typeof="password">Password:</label>
        <input type="password" id="password" className={css(styles.input)} />
        <button>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
  },
  input: {
    margin: "10px",
  },
});
