import React from "react";
import holberton from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <>
      <div className={css(styles["App_header"])}>
        <img
          src={holberton}
          alt="Holberton Logo"
          className={css(styles.img["App_header"])}
        />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}
const styles = StyleSheet.create({
  "div-header": {
    borderBottom: "4px solid rgb(218, 62, 62)",
    display: "flex",
    alignItems: "center",
    color: "rgb(174, 39, 39)",
  },
  img: {
    width: "200px",
    height: "200px",
  },
});

export default Header;
