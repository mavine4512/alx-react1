import React from "react";
import { mount } from "enzyme";
import { jest } from "@jest/globals";

import WithLogging from "./WithLogging";
import Login from "../Login/Login";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Testing WithLogging HOC", () => {
  it("should make sure console logs was called on unmount and mount with component when the wrapper element is pure html", () => {
    console.log = jest.fn();
    const Hoc = WithLogging(() => <p>Hello there</p>);
    const comp = <Hoc title="hello" />;
    let wrapper = mount(comp);

    expect(console.log).toBeCalleWith("Component is mounted");
    wrapper.unmount();
    expect(console.log).toBeCalleWith("Component is going to unmounted");
    jest.restoreAllMocks();
  });
});
