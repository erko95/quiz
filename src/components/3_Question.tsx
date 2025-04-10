import React, { useState } from "react";
import { Confirmation } from "./2_Confirmation";

/*
  The Question component should render the question, and a "Show answer" button.

  When clicked, the Show Answer button should result in the Confirmation being rendered,
  which should ask the user if they want to reveal the answer.

  The answer should only be revealed if "accept" is clicked.
  If "decline" is clicked, the Question component should go back to the initial state.
*/

interface Props {
  question: string;
  answer: string;
}

export function Question({ question, answer }: Props) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswerClick = () => {
    setShowConfirm(true);
  };

  const handleAccept = () => {
    setShowAnswer(true);
    setShowConfirm(false);
  };

  const handleDecline = () => {
    setShowConfirm(false);
  };

  return (
    <section className="section">
      <p className="question">{question}</p>
      {!showAnswer && !showConfirm && (
        <button onClick={handleShowAnswerClick}>Show Answer</button>
      )}

      {showConfirm && (
        <Confirmation
          message="Are you sure you want to reveal the answer?"
          type="message"
          accept={handleAccept}
          decline={handleDecline}
        />
      )}

      {showAnswer && <p className="answer">{answer}</p>}
    </section>
  );
}