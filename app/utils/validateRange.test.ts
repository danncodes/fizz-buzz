import { validateRange } from "./validateRange";

describe("validateRange", () => {
  it("should return error if start is undefined", () => {
    const result = validateRange(undefined, "10");

    expect(result).toEqual({
      error: "Both start and end values are required",
    });
  });

  it("should return error if end is undefined", () => {
    const result = validateRange("1", undefined);

    expect(result).toEqual({
      error: "Both start and end values are required",
    });
  });

  it("should return error if both values are empty strings", () => {
    const result = validateRange("", "");

    expect(result).toEqual({
      error: "Both start and end values are required",
    });
  });

  it("should return error if start is not an integer", () => {
    const result = validateRange("1.5", "10");

    expect(result).toEqual({
      error: "The start and end values must be integers",
    });
  });

  it("should return error if values are not numbers", () => {
    const result = validateRange("abc", "xyz");

    expect(result).toEqual({
      error: "The start and end values must be integers",
    });
  });

  it("should return error if start is greater than end", () => {
    const result = validateRange("10", "1");

    expect(result).toEqual({
      error: "The start value must be less than or equal to the end value",
    });
  });

  it("should allow start equal to end", () => {
    const result = validateRange("5", "5");

    expect(result).toEqual({ start: 5, end: 5 });
  });

  it("should return error if range size exceeds 10000", () => {
    const result = validateRange("1", "10001");

    expect(result).toEqual({
      error: "The total range size must be less than or equal to 10000",
    });
  });

  it("should return parsed start and end for valid input", () => {
    const result = validateRange("1", "10");

    expect(result).toEqual({ start: 1, end: 10 });
  });

  it("should handle negative numbers correctly", () => {
    const result = validateRange("-5", "5");

    expect(result).toEqual({ start: -5, end: 5 })
  });
});