import React from "react";
import { shallow } from "@testing-library/react";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

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
  // it(`Test that`)
});
