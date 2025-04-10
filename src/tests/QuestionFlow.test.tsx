import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App, { questions } from "../App";

describe("Full Question Flow for specific question", () => {
  test.each(questions.filter((q) => q.id === 0))(
    "reveals answer after confirmation for: %s",
    ({  question, answer }) => {
      render(<App />);
      const section = screen.getByText(question).closest("section");
      expect(section).toBeInTheDocument();
      const button = within(section!).getByText("Show Answer");
      fireEvent.click(button);
      expect(
        screen.getByText("Are you sure you want to reveal the answer?")
      ).toBeInTheDocument();
      fireEvent.click(screen.getByText("Accept"));
      expect(screen.getByText(answer)).toBeInTheDocument();
      expect(
        screen.queryByText("Are you sure you want to reveal the answer?")
      ).not.toBeInTheDocument();
    }
  );
});
