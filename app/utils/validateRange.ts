import { FizzBuzzError } from "../types/types";

export function validateRange(
  startInputValue: string | undefined,
  endInputValue: string | undefined
): { start: number; end: number } | { error: FizzBuzzError } {

  if (!startInputValue || !endInputValue) {
    return { error: "Both start and end values are required" };
  }

  const start = Number(startInputValue);
  const end = Number(endInputValue);

  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return { error: "The start and end values must be integers" };
  }

  if (start > end) {
    return { error: "The start value must be less than or equal to the end value" };
  }

  if (end - start + 1 > 10000) {
    return { error: "The total range size must be less than or equal to 10000" };
  }

  return { start, end };
}