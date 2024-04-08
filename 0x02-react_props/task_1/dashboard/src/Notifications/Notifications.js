import React from "react";
import "./Notifications";
import { getLatestNotification } from "../utils/utils";

function Notifications() {
  const handleButtonClick = () => {
    console.log("Close button clicked");
  };
  return (
    <div className="Notifications">
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{
            __html: getLatestNotification(),
          }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
