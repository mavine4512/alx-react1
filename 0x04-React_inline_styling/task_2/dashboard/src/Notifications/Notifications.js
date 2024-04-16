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
        <div className={css(styles.menuItem)}>
          <p>Your Notifications</p>
        </div>
        {displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button
              style={{
                float: "right",
              }}
              aria-label="Close"
              onClick={handleButtonClick}
            >
              X
            </button>
            {listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul>
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

const styles = StyleSheet.create({
  notifications: {
    padding: "1em",
    border: "2px dashed red",
    position: "absolute",
    top: "1.8em",
    right: "0",
  },
  "notification-header": {
    display: "flex",
    justifyContent: "space-between",
  },
  menuItem: {
    textAlign: "right",
  },
  '[data-notification-type="default"]': {
    color: "blue",
  },
  "[data-urgent]": {
    color: "red",
  },
  '[data-notification-type="urgent"]': {
    color: "red",
  },
});

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notification;
