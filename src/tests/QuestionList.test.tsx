import React from "react";
import { render, screen } from "@testing-library/react";
import { QuestionList } from "../components/4_QuestionList";
import { questions } from "../App";

describe("QuestionList component", () => {
  it("renders questions from App.tsx", () => {
    render(<QuestionList questions={questions} />);

    questions.forEach((q) => {
      expect(screen.getByText(q.question)).toBeInTheDocument();
    });
  });
});
