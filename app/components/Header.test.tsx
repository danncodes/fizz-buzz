import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render the title and description", () => {
    render(
      <Header
        title="Fizz Buzz Generator"
        description="Enter a range and see the magic happen."
      />
    );

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Fizz Buzz Generator",
    });

    expect(heading).toBeInTheDocument();
    expect(
      screen.getByText("Enter a range and see the magic happen.")
    ).toBeInTheDocument();
  });

  it("should render inside a header element", () => {
    const { container } = render(
      <Header title="Test Title" description="Test Description" />
    );

    const headerElement = container.querySelector("header");
    expect(headerElement).toBeInTheDocument();
  });
});