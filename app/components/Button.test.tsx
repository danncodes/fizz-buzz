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

  it("should submit the form when clicked", async () => {
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

  it("should render different button text correctly", () => {
    render(<Button text="Click Me" />);

    expect(screen.getByRole("button", { name: "Click Me" }))
      .toBeInTheDocument();
  });
});