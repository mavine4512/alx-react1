import React from "react";
import { shallow } from "enzyme";

import App from "../src/App/App";

describe("<App />", () => {
  it("render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("render a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App-header").exists()).toBe(true);
  });

  it("render a div with the class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App-body").exists()).toBe(true);
  });

  it("render a div with the class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App-footer").exists()).toBe(true);
  });
});
