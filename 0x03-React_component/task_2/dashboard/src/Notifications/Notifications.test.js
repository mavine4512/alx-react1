import React from "react";
import { render } from "enzyme";
import Notifications from "../src/Notifications/Notifications";

describe("Notification Component", () => {
  it("render NotificationItem elements instead of li", () => {
    const { getAllByTestId } = render(<Notifications />);
    const notificationItems = getAllByTestId("Notification-item");
    expect(notificationItems.length).toBeGreaterThanOrEqual(1);
  });

  it("verifies the first NotificationItem renders the correct html", () => {
    const { getAllByTestId } = render(<Notifications />);
    const firstNotificationItem = getAllByTestId("Notification-item");
    expect(firstNotificationItem).toHaveTextContent("New course Available");
  });

  it("renders without crashing", () => {
    render(<Notifications />);
  });

  it("display menu item when displayDrawer is false", () => {
    const { queryByTestId } = render(<Notifications displayDrawer={false} />);
    const menuItem = queryByTestId("Your Notifications");
    expect(menuItem).toBeInTheDocument();
  });

  it("does not display div.Notifications when displayDrawer is false", () => {
    const { queryByTestId } = render(<Notifications displayDrawer={false} />);
    const notificationDiv = queryByTestId("Your Notifications");
    expect(notificationDiv).toBeNull();
  });

  it("display menu item when displayDrawer is true", () => {
    const { queryByTestId } = render(<Notifications displayDrawer={true} />);
    const menuItem = queryByTestId("Your Notifications");
    expect(menuItem).toBeInTheDocument();
  });

  it("does not display div.Notifications when displayDrawer is false", () => {
    const { queryByTestId } = render(<Notifications displayDrawer={true} />);
    const notificationDiv = queryByTestId("Your Notifications");
    expect(notificationDiv).toBeNull();
  });
});
