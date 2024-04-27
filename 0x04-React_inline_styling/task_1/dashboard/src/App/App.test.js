import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Test App.js", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Renders App without crashing", () => {
    expect(wrapper.exists());
  });

  it("App component contains Notifications component", () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("App component contains Header Component", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("App component contains Login Component", () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("App component contains Footer Component", () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it("Test to check that CourseList is not displayed inside App", () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true} />);
  });

  it("the login component is not included", () => {
    expect(wrapper.find("Login")).toHaveLength(0);
  });

  it("the CourseList component is included", () => {
    expect(wrapper.find("CourseList").exists());
  });
});
