import React from "react";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // only update if the new listNotifications has a longer list than the previous listNotifications
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  handleButtonClick = () => {
    console.log("Close button clicked");
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(notificationsStyles.menuItem)}>
          <p>Your Notifications</p>
        </div>
        {displayDrawer ? (
          <div className={css(notificationsStyles.notifications)}>
            <button
              style={{
                float: "right",
              }}
              aria-label="Close"
              className={css(notificationsStyles.button)}
              onClick={handleButtonClick}
            >
              X
            </button>
            {listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul className={css(notificationsStyles.ul)}>
              {listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
              ) : null}
              {listNotifications.map((val, idx) => {
                return (
                  <NotificationItem
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={idx}
                    markAsRead={val.markAsRead}
                    id={val.id}
                  />
                );
              })}
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}

const opacityAnim = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnim = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const notificationsStyles = StyleSheet.create({
  notifications: {
    border: "3px dotted var(--holberton-red)",
    padding: "6px 12px",
    position: "absolute",
    top: "21px",
    right: "7px",
    marginTop: "12px",
    zIndex: "100",
    "@media (max-width: 900px)": {
      width: "100%",
      padding: "0px",
      fontSize: 20,
      position: "relative",
      right: 0,
      left: 0,
      border: "none",
    },
  },
  menuItem: {
    position: "relative",
    zIndex: 100,
    float: "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },
  ul: {
    "@media (max-width: 900px)": {
      padding: 0,
    },
  },
  button: {
    "@media (max-width: 900px)": {
      position: "relative",
      float: "right",
    },
  },
});

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notification;
