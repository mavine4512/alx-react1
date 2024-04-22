import React from "react";
import "./Notifications";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";
import PropTypes from "prop-types";

function Notification({ displayDrawer, listNotifications }) {
  const handleButtonClick = () => {
    console.log("Close button clicked");
  };
  return (
    <>
      {displayDrawer ? (
        <div className="notifications">
          <button
            style={{
              color: "#3a3a3a",
              fontWeight: "bold",
              background: "none",
              border: "none",
              fontSize: "15px",
              position: "absolute",
              right: "3px",
              cursor: "pointer",
              outline: "none",
            }}
            aria-label="Close"
            onClick={handleButtonClick}
          >
            <img src={closeIcon} alt="Close icon" width={"15px"} />
          </button>
          {listNotifications.length !== 0 ? (
            <p>Here is the list of notifications</p>
          ) : null}

          <ul>
            <NotificationItem type="urgent" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={getLatestNotification()} />
          </ul>
        </div>
      ) : (
        <div className="menuItem">
          <p>Your Notifications</p>
        </div>
      )}
    </>
  );
}

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
};
Notification.defaultProps = {
  displayDrawer: false,
};

export default Notification;
