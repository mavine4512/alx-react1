import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header Component", () => {
  it("renders without crashing", () => {
    render(<Header />);
  });

  it("renders img and h1 tags", () => {
    const { getByAltText, getByText } = render(<Header />);

    // Check img tag
    const imgElement = getByAltText("Holberton Logo");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.tagName).toBe("IMG");

    // Check h1 tag
    const h1Element = getByText("School dashboard");
    expect(h1Element).toBeInTheDocument();
    expect(imgElement.tagName).toBe("H1");
  });
});
