import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("should render the button with provided text", () => {
    render(<Button text="Generate FizzBuzz" />);

    const button = screen.getByRole("button", {
      name: "Generate FizzBuzz",
    });

    expect(button).toBeInTheDocument();
  });

  it("should NOT submit the form when button is disabled", async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn((e) => e.preventDefault());

  render(
    <form onSubmit={handleSubmit}>
      <Button text="Generate" />
    </form>
  );

  const button = screen.getByRole("button", { name: "Generate" });
  await user.click(button);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("should submit the form when clicked", async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn((e) => e.preventDefault());

  render(
    <form onSubmit={handleSubmit}>
      <Button text="Generate" disabled={true} />
    </form>
  );

  const button = screen.getByRole("button", { name: "Generate" });
  await user.click(button);

  expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should render different button text correctly", () => {
    render(<Button text="Click Me" />);

    expect(screen.getByRole("button", { name: "Click Me" }))
      .toBeInTheDocument();
  });

  it("should apply disabled styling classes", () => {
  render(<Button text="Generate" disabled />);

  const button = screen.getByRole("button", { name: "Generate" });

  expect(button).toHaveClass("cursor-not-allowed");
});
});