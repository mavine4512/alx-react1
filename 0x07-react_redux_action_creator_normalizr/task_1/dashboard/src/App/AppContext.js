import React from "react";

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
