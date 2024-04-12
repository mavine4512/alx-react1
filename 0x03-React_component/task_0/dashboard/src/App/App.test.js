import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";
import App from "./App";

describe("Test App.js", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Renders App without crashing", () => {
    expect(wrapper.length).toBe(1);
  });

  it("App renders a div with the class: App-body", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(".App-header").length).toBe(0);
  });

  it("App renders a div with the class: App-body", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(".App-body").length).toBe(1);
  });

  it("App renders a div with the class: App-footer", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(".App-footer").length).toBe(1);
  });

  it("App component contains Header Component", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(<Header />)).toBeTruthy();
  });

  it("App component contains Login Component", () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.find(<Login />)).toBeTruthy();
  });

  it("App component contains Footer Component", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.contains(<Footer />)).toBeTruthy();
  });

  it("Test to check that CourseList is not displayed inside App", () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.contains(<CourseList />)).toBeFalsy();
  });

  describe("Testing isLoggedIn prop is true />", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it("the login component is not included", () => {
      expect(wrapper.contains(<Login />)).toBeFalsy();
    });

    it("the CourseList component is included", () => {
      expect(wrapper.find("CourseList").length).toBe(1);
    });
  });
});
