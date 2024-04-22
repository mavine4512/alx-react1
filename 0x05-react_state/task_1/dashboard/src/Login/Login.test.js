import React from "react";
import { mount, shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

// Configure Enzyme with the adapter
Enzyme.configure({ adapter: new Adapter() });

describe("testing Login Component", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Login />);
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Login component renders 2 input tags and 2 label tags", () => {
    expect(wrapper.find("input")).toHaveLength(3);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});

describe("Test the  Login component with state", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  it("Verify that the submit button is disabled by default", () => {
    expect(wrapper.state().enableSubmit).toBe(false);
  });
});
