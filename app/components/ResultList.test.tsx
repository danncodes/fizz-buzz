import { render, screen } from "@testing-library/react";
import ResultList from "./ResultList";

describe("ResultList", () => {
  it("should render a list", () => {
    render(<ResultList result={[1, 2, 3]} />);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("should render the correct number of items", () => {
    render(<ResultList result={[1, "Fizz", "Buzz"]} />);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
  });

  it("should render an empty list when result is empty", () => {
    render(<ResultList result={[]} />);

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
  });
});