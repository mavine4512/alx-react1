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
import { AppProvider, user } from "./AppContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    this.listNotifications = [
      { id: 1, name: "default", value: "New course available" },
      { id: 2, name: "urgent", value: "New resume available" },
      { id: 3, name: "urgent", html: getLatestNotification() },
    ];
  }

  logIn = (email, password) => {
    this.setState({ user: { email: email, password: password } });
  };

  logOut = () => {
    this.setState({
      user: user,
    });
  };

  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true,
    });
  };

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false,
    });
  };

  handleKeyDown(e) {
    if (e.ctrKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { isLoggedIn, logOut } = this.prop;
    const { displayDrawer } = this.state;

    return (
      <AppProvider
        value={{
          user: this.state.user,
          logOut: this.state.logOut,
        }}
      >
        <React.Fragment>
          <Notification
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDraw}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div className={css(styles.container)}>
            <div className={css(styles.app)}>
              <Header />
            </div>
            <div className={css(styles.appBody)}>
              {isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to Continue">
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>
              )}
            </div>

            <BodySection title="News from the school">
              <p>Body section text</p>
            </BodySection>
            <div className={css(styles.footer)}>
              <Footer />
            </div>
          </div>
        </React.Fragment>
      </AppProvider>
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

const cssVars = {
  mainColor: "#e01d3f",
};

const screenSize = {
  small: "@media screen and (min-width:900px)",
};

const styles = StyleSheet.create({
  container: {
    width: "calc(100% - 16px)",
    marginLeft: "8px",
    marginRight: "8px",
  },
  app: {
    borderBottom: `1px solid ${cssVars.mainColor}`,
  },
  appBody: {
    display: "flex",
    justifyContent: "center",
  },
  footer: {
    borderTop: `3px solid ${cssVars.mainColor}`,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    fontStyle: "italic",
    [screenSize.small]: {
      position: "static",
    },
  },
});
export default App;
