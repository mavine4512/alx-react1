import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  it("renders without crashing", () => {
    shallow(<Notification />);
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find("li").toHaveLength(3));
  });

  it("renders the text in the notification", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(<Notification />);
    expect(wrapper.find("p").text()).toBe(text);
  });
});
