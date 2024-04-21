import React from "react";
import holberton from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

function Header() {
  const { user, logOut } = this.context;
  return (
    <>
      <div className={css(styles.appHeader)}>
        <img
          src={holberton}
          alt="Holberton Logo"
          className={css(styles.appLogo)}
        />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        {user.isLogggedIn && (
          <section id="logoutSection">
            Welcom {user.email}{" "}
            <a href="" onClick={() => logOut}>
              (logout)
            </a>
          </section>
        )}
      </div>
    </>
  );
}
const styles = StyleSheet.create({
  h1: {
    marginLeft: "10rem",
    float: "right",
    flex: 2,
    "@media (max-width: 900px)": {
      margin: "auto",
    },
  },

  appHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#E11D3F",
    borderBottom: "1px solid #E11D3F",
    width: "100%",
    boxSizing: "border-box",
  },
  appLogo: {
    maxHeight: "200px",
    maxWidth: "200px",
    height: "auto",
    width: "auto",
    flex: 1,
  },
});

Header.contextType = AppContext;

export default Header;
