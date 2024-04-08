import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notification from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import "./App.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Notification />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
