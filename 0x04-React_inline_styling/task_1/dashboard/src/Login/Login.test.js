import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login Component", () => {
  it("renders without crashing", () => {
    render(<Login />);
  });

  it("renders 2 input tags and 2 label tags", () => {
    const { container } = render(<Login />);
    const inputTags = container.querySelectorAll("input");
    const labelTags = container.querySelectorAll("label");

    expect(inputTags.length).toBe(2);
    expect(labelTags.length).toBe(2);
  });
});
