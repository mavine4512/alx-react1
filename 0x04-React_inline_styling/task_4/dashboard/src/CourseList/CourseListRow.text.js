import React from "react";
import { render } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component", () => {
  it("renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true", () => {
    const { container } = render(
      <CourseListRow isHeader={true} textFirstCell="Header Text" />
    );
    const thElement = container.querySelector("th");

    expect(thElement).toBeInTheDocument();
    expect(thElement.colSpan).toBe(2);
  });

  it("renders 2 cells when textSecondCell is present and isHeader is true", () => {
    const { container } = render(
      <CourseListRow
        isHeader={true}
        textFirstCell="Data 1"
        textSecondCell="Data 2"
      />
    );
    const thElement = container.querySelector("th");

    expect(thElement.length).toHaveLength(2);
  });

  it("renders correctly two td elements within a tr element when isHeader is false", () => {
    const { container } = render(
      <CourseListRow
        isHeader={false}
        textFirstCell="Data 1"
        textSecondCell="Data 2"
      />
    );
    const trElement = container.querySelector("tr");
    const tdElements = container.querySelectorAll("td");

    expect(trElement).toBeInTheDocument();
    expect(tdElements).toHaveLength(2);
  });
});
