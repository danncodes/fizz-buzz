import { render, screen } from "@testing-library/react";
import { FizzBuzzError } from "../types/types";
import ErrorFooter from "./ErrorFooter";

describe("ErrorFooter", () => {
  it("should render the error message when provided", () => {
    const errorMessage: FizzBuzzError = "The total range size must be less than or equal to 10000";

    render(<ErrorFooter error={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});