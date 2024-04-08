import React from "react";
import { render } from "@testing-library/react";
import CourseList from "./CourseList";

// check that it render CourseList component without crashing
test("renders CourseList Component without crashing", () => {
  render(<CourseList />);
});

// check that it renders the 5 different rows
test("renders 5 different rows", () => {
  const { getByText } = render(<CourseList />);

  expect(getByText("Available courses")).toBeInTheDocument();
  expect(getByText("courses name")).toBeInTheDocument();
  expect(getByText("ES6")).toBeInTheDocument();
  expect(getByText("Webpack")).toBeInTheDocument();
  expect(getByText("React")).toBeInTheDocument();
});
