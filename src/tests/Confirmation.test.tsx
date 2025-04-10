import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Confirmation } from "../components/2_Confirmation";

describe("Confirmation component", () => {
  it("renders the message and buttons", () => {
    render(
      <Confirmation
        message="Are you sure?"
        type="caution"
        accept={() => {}}
        decline={() => {}}
      />
    );

    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
    expect(screen.getByText("Accept")).toBeInTheDocument();
    expect(screen.getByText("Decline")).toBeInTheDocument();
  });

  it("calls accept and hides on Accept click", () => {
    const accept = jest.fn();
    render(
      <Confirmation message="Confirm?" accept={accept} decline={() => {}} />
    );

    fireEvent.click(screen.getByText("Accept"));
    expect(accept).toHaveBeenCalled();
    expect(screen.queryByText("Confirm?")).not.toBeInTheDocument();
  });

  it("calls decline and hides on Decline click", () => {
    const decline = jest.fn();
    render(
      <Confirmation message="Confirm?" accept={() => {}} decline={decline} />
    );

    fireEvent.click(screen.getByText("Decline"));
    expect(decline).toHaveBeenCalled();
    expect(screen.queryByText("Confirm?")).not.toBeInTheDocument();
  });
});
