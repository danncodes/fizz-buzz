import { FizzBuzzValue } from "../types/types";

export function fizzBuzz(start: number, end: number): { result: FizzBuzzValue[]} {
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
  
  return  { result };
}