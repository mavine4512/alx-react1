import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="App-body">
      <p className="app-body">Login to access the full dashboard</p>
      <label typeof="email">Email:</label>
      <input type="email" id="enter email" />
      <label typeof="password">Password:</label>
      <input type="password" id="password" />
      <button>OK</button>
    </div>
  );
}
