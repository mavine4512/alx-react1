import React from "react";
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
import { AppProvider, user } from "./AppContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ],
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
  }

  markNotificationAsRead = (id) => {
    const newList = this.state.listNotifications.filter(
      (keep) => keep.id === id
    );
    this.setState({
      listNotifications: newList,
    });
  };

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

  handleKeyCombination(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyCombination);
  }

  render() {
    const { user, logOut } = this.prop;
    const { displayDrawer, listNotifications } = this.state;

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
          <div className={css(styles.app)}>
            <Header />
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to Continue">
                <Login logIn={this.logIn} />
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
      </AppProvider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    borderBottom: `1px solid ${cssVars.mainColor}`,
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
