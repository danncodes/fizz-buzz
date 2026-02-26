import { render, screen } from "@testing-library/react";
import ResultItem from "./ResultItem";

describe("ResultItem", () => {
  it("should render a number with default styling", () => {
    render(<ResultItem item={7} index={0} />);

    const li = screen.getByRole("listitem");

    expect(li).toHaveTextContent("7");
    expect(li.className).toContain("border-gray-300");
    expect(li.className).toContain("bg-gray-100");
  });

  it.each([
    { item: "Fizz" as const, border: "border-green-500", bg: "bg-green-200" },
    { item: "Buzz" as const, border: "border-yellow-500", bg: "bg-yellow-200" },
    { item: "FizzBuzz" as const, border: "border-purple-500", bg: "bg-purple-200" },
  ])("should render $item with correct styling", ({ item, border, bg }) => {
    render(<ResultItem item={item} index={0} />);

    const li = screen.getByRole("listitem");

    expect(li).toHaveTextContent(item);
    expect(li.className).toContain(border);
    expect(li.className).toContain(bg);
  });
});