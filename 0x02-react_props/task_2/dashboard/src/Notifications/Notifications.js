import React from "react";
import "./Notifications";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

function Notification() {
  const handleButtonClick = () => {
    console.log("Close button clicked");
  };
  return (
    <div className="notifications">
      <button
        style={{
          float: "right",
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        X
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="urgent" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
    </div>
  );
}

export default Notification;
