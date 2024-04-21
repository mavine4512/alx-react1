import React from "react";
import { shallow } from "@testing-library/react";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "../App/AppContext";

describe("Header Component", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Header />);
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Renders an h1 tag", () => {
    expect(wrapper.find("h1")).toBeDefined();
  });

  it("Renders an img tag", () => {
    expect(wrapper.find("img")).toBeDefined();
  });
  it(`Test that logoutSection is not rendered with default context values`, () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(0);
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
    wrapper.unmount();
  });
  it(`Test that logoutSection is rendered with default context values`, () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(0);
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
    wrapper.unmount();
  });

  it(`Verifies that the logOut function is called when clicking on logout link`, () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    const spy = jest.spyOn(context, "logOut");

    wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find("a").simulate("click");

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1); //
    wrapper.unmount();
  });
});
