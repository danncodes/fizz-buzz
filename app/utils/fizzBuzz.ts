import { FizzBuzzValue, FizzBuzzError } from "../types/types";

export function fizzBuzz(start: number, end: number): { result: FizzBuzzValue[], error: FizzBuzzError | null } {

  if (start > end) {
      return  {
        result: [], 
        error: "The start value must be less than or equal to the end value" 
      };
  }

  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return {
      result: [],
      error: "The start and end values must be integers"
    };
  }

  const rangeSize = end - start + 1 ;
  if (rangeSize > 10000) {
      return  {
        result: [], 
        error: "The total range size must be less than or equal to 10000" 
      };
  }

  const result: FizzBuzzValue[] = [];

  for (let value = start; value <= end; value++){

    const isFizz = value % 3 === 0;
    const isBuzz = value % 5 === 0;

    if (isFizz && isBuzz) {
      result.push("FizzBuzz");
    } else if (isFizz) {
      result.push("Fizz");
    } else if (isBuzz) {
      result.push("Buzz");
    } else {
      result.push(value);
    }
  }
  
  return  {
    result, 
    error: null
  };
}