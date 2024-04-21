import React from "react";

export const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export function logout() {
  user.isLoggedIn = false;
}

const AppContext = React.createClass({
  user,
  logOut,
});

const AppProvider = AppContext.AppProvider;
const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
export default AppContext;
