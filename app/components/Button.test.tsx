import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("should render the button with provided text", () => {
    render(<Button onClick={jest.fn()} text="Generate FizzBuzz" />);

    const button = screen.getByRole("button", {
      name: "Generate FizzBuzz",
    });

    expect(button).toBeInTheDocument();
  });

  it("should call onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} text="Generate" />);
    
    const button = screen.getByRole("button", { name: "Generate" });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should render different button text correctly", () => {
    render(<Button onClick={jest.fn()} text="Click Me" />);

    expect(screen.getByRole("button", { name: "Click Me" }))
      .toBeInTheDocument();
  });
});