import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RangeInput from "./RangeInput";

describe("RangeInput", () => {
  it("should render the label and input with correct default value", () => {
    render(
      <RangeInput id="range-start" label="Start" ref={null} defaultValue={5} />
    );
    const input = screen.getByLabelText("Start");

    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(input).toHaveValue(5);
  });

  it("should update the input value when user types", async () => {
    const user = userEvent.setup();

    render(
      <RangeInput id="range-start" label="Start" ref={null} defaultValue={5} />
    );

    const input = screen.getByLabelText("Start");
    await user.clear(input);
    await user.type(input, "10");

    expect(input).toHaveValue(10);
  });

});