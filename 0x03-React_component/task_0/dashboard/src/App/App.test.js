import App from "./App";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

// Configure Enzyme with the adapter
Enzyme.configure({ adapter: new Adapter() });

jest.mock("../assets/holberton-logo.jpg", () => ({
  default: "holberton-logo.jpg",
}));

jest.mock("./App.css", () => ({}));
jest.mock("../Header/Header.css", () => ({}));
jest.mock("../Login/Login.css", () => ({}));
jest.mock("../Header/Header.css", () => ({}));
jest.mock("../Notifications/Notifications.css", () => ({}));
jest.mock("../CourseList/CourseList.css", () => ({}));
jest.mock("../Footer/Footer.css", () => ({}));

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("App should not crash", () => {
    expect(wrapper.length).toBe(1);
  });

  test("App renders a div with the class: App-header", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find("App-header").length).toBe(0);
  });

  test("App renders a div with the class: App", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(".App").length).toBe(1);
  });

  test("App renders a div with the class: App-body", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(".App-body").length).toBe(1);
  });

  test("App renders a div with the class: App-footer", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(".App-footer").length).toBe(1);
  });

  test("check if App component contain the Header component", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.contains(<Header />)).toBeTruthy();
  });

  test("check if App component contain the Login component", () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.contains(<Login />)).toBeTruthy();
  });
  test("check if App component contain the Footer component", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.contains(<Footer />)).toBeTruthy();
  });
  test("check that CourseList is not displayed ", () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.contains(<CourseList />)).toBeFalsy();
  });

  describe("when isLoggedIn prop is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });
    test("verify that the Login component is not included", () => {
      expect(wrapper.contains(<Login />)).toBeFalsy();
    });
    test("verify that the CourseList component is included", () => {
      expect(wrapper.find("CourseList").length).toBe(1);
    });
  });
});
