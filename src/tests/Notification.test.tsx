import React from "react";
import { render, screen } from "@testing-library/react";
import { Notification } from "../components/1_Notification";

describe("Notification component", () => {
  it("renders the message", () => {
    render(<Notification message="Success!" type="success" />);
    expect(screen.getByText("Success!")).toBeInTheDocument();
  });

  it("applies the correct class based on type", () => {
    const { container } = render(
      <Notification message="Danger!" type="error" />
    );
    expect(container.firstChild).toHaveClass(
      "notification",
      "notification-danger"
    );
  });

  it("renders children when provided", () => {
    render(
      <Notification message="Warning!" type="caution">
        <button>Click Me</button>
      </Notification>
    );
    expect(
      screen.getByRole("button", { name: "Click Me" })
    ).toBeInTheDocument();
  });
});
