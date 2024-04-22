import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

jest.mock("../utils/utils", () => ({
  getFullYear: jest.fn(() => 2024),
  getFooterCopy: jest.fn(() => "Copyright"),
}));

describe("Footer Component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("renders img and h1 tags", () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(/Current year: 2024-Copyright/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
