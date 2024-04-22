import React, { Component } from "react";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notification from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from "aphrodite";
import { getLatestNotification } from "../utils/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };

    this.IsLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    this.listNotifications = [
      { id: 1, value: "New course available" },
      { id: 2, value: "New resume available" },
      { id: 3, html: { __html: getLatestNotification() } },
    ];
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { isLoggedIn, logOut } = this.props;
    const { displayDrawer } = this.state;

    return (
      <React.Fragment>
        <Notification
          // listNotifications={this.listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.app)}>
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
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

const styles = StyleSheet.create({
  app: {
    position: "relative",
    minHeight: "100vh",
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "3px solid #E11D3F",
    padding: "1rem",
    fontStyle: "italic",
  },
});
export default App;
