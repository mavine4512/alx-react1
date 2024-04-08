import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("contain the Notification component", () => {
    const { getByTestId } = render(<App />);
    const notificationsComponent = getByTestId("notifications-component");
    expect(notificationsComponent).toBeInTheDocument();
  });

  it("Contains the Header component", () => {
    const { getByTestId } = render(<App />);
    const headerComponent = getByTestId("header-component");
    expect(headerComponent).toBeInTheDocument();
  });

  it("Contains the Login component", () => {
    const { getByTestId } = render(<App />);
    const loginComponent = getByTestId("login-component");
    expect(loginComponent).toBeInTheDocument();
  });

  it("Contains the Footer component", () => {
    const { getByTestId } = render(<App />);
    const footerComponent = getByTestId("footer-component");
    expect(footerComponent).toBeInTheDocument();
  });

  it("Does not display CourseList component when isLoggedIn is false", () => {
    const { queryByTestId } = render(<App />);
    const courseListComponent = queryByTestId("courselist-component");
    expect(courseListComponent).toBeNull();
  });
  describe("when isLoggedIn is true", () => {
    it("does not include Login component", () => {
      const { queryByTestId } = render(<App isLoggedIn={true} />);
      const loginComponent = queryByTestId("login-component");
      expect(loginComponent).toBeNull();
    });
  });
  it("includes courseLis component", () => {
    const { queryByTestId } = render(<App isLoggedIn={true} />);
    const courseLisComponent = queryByTestId("courselist-component");
    expect(courseLisComponent).toBeInTheDocument();
  });
});
