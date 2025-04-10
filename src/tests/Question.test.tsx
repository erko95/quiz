import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Question } from "../components/3_Question";

const sampleQuestion = {
  question: "What is 2 + 2?",
  answer: "4",
};

describe("Question coqmponent", () => {
  it("renders the question and 'Show Answer' button", () => {
    render(<Question question={sampleQuestion.question} answer={sampleQuestion.answer} />);
    expect(screen.getByText(sampleQuestion.question)).toBeInTheDocument();
    expect(screen.getByText("Show Answer")).toBeInTheDocument();
  });

  it("displays confirmation dialog after clicking 'Show Answer'", () => {
    render(<Question question={sampleQuestion.question} answer={sampleQuestion.answer} />);
    fireEvent.click(screen.getByText("Show Answer"));
    expect(screen.getByText("Are you sure you want to reveal the answer?")).toBeInTheDocument();
    expect(screen.getByText("Accept")).toBeInTheDocument();
    expect(screen.getByText("Decline")).toBeInTheDocument();
  });

  it("reveals the answer when 'Accept' is clicked", () => {
    render(<Question question={sampleQuestion.question} answer={sampleQuestion.answer} />);
    fireEvent.click(screen.getByText("Show Answer"));
    fireEvent.click(screen.getByText("Accept"));
    expect(screen.getByText(sampleQuestion.answer)).toBeInTheDocument();
  });

  it("hides confirmation when 'Decline' is clicked", () => {
    render(<Question question={sampleQuestion.question} answer={sampleQuestion.answer} />);
    fireEvent.click(screen.getByText("Show Answer"));
    fireEvent.click(screen.getByText("Decline"));
    expect(screen.queryByText("Are you sure you want to reveal the answer?")).not.toBeInTheDocument();
    expect(screen.queryByText(sampleQuestion.answer)).not.toBeInTheDocument();
  });
});
