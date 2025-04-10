import React from "react";

import { Question as QuestionComponent } from "./3_Question";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  questions: Question[];
}

export function QuestionList({ questions }: Props) {
  return (
    <div className="question-list">
      {questions.map((q) => (
        <QuestionComponent
          key={q.id}
          question={q.question}
          answer={q.answer}
        />
      ))}
    </div>
  );
}
