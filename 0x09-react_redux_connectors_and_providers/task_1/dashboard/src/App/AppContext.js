import React from "react";
import App from "./App";

export const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export const logout = () => {};

export const AppContext = React.createClass({
  user,
  logOut,
});

export default AppContext;
