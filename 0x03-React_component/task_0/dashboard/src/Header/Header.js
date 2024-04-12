import React from "react";
import Holberton from "../assets/holberton-logo.jpg";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="App-header">
        <img src={Holberton} alt="Holberton Logo" className="App-header" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

export default Header;
