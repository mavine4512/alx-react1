import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
    this.selected_style =
      this.props.type == "default" ? itemStyles.default : itemStyles.urgent;
  }

  render() {
    const { value, type, markAsRead, id, html } = this.props;

    return value ? (
      <li
        data-notification-type={type}
        className={css(this.selected_style, itemStyles.li)}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    ) : (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        className={css(this.selected_style, itemStyles.li)}
        onClick={() => {
          console.log("empty");
        }}
      ></li>
    );
  }
}

const itemStyles = StyleSheet.create({
  li: {
    "@media (max-width:900px)": {
      listStyle: "none",
      borderBottom: "1px solid black",
      padding: "10px 8px",
      margin: 0,
      width: "100%",
      fontSize: "20px",
    },
  },
  urgent: {
    color: "red",
  },
  default: {
    color: "blue",
  },
});

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty");
  },
  id: 0,
};

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;
