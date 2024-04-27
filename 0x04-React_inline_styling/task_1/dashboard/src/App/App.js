import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notification from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import PropTypes from "props-types";
import { StyleSheet, css } from "aphrodite";
import { getLatestNotification } from "../utils/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, name: "default", value: "New course available" },
    { id: 2, name: "urgent", value: "New resume available" },
    { id: 3, name: "urgent", html: getLatestNotification() },
  ];

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging You Out");
      this.prop.logOut();
    }
  };

  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            <Notification listNotifications={listNotifications} />
            <Header />
          </div>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to Continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}

          <BodySection title="News from the school">
            <p>Body section text</p>
          </BodySection>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Aricl, Helvetica, sans-serif",
  },
  body: {
    maxWidth: "90%",
    margin: "0 auto",
    position: "relative",
  },
  footer: {},
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};
export default App;
