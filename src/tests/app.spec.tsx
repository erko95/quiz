import App from "../App";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("QuestionList App", () => {
  it("renders app", () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });
});
