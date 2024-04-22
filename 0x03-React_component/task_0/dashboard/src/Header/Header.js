import React from "react";
import holberton from "../assets/holberton-logo.jpg";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="App-header">
        <img src={holberton} alt="Holberton Logo" className="App-header" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}
