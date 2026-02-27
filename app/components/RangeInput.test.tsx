import { render, screen, fireEvent } from "@testing-library/react";
import RangeInput from "./RangeInput";

describe("RangeInput", () => {
  it("should render the label and input with correct value", () => {
    render(
      <RangeInput id="range-start" label="Start" value="5" onChange={jest.fn()} />
    );
    const input = screen.getByLabelText("Start");

    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(input).toHaveValue(5);
  });

  it("should call onChange with a number when value changes", async () => {
    const handleChange = jest.fn();

    render(
      <RangeInput id="range-end" label="End" value="10" onChange={handleChange} />
    );

    const input = screen.getByLabelText("End");
    fireEvent.change(input, { target: { value: "42" } });

    expect(handleChange).toHaveBeenCalledWith("42");
  });

});