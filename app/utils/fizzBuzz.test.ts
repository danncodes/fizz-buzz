import { fizzBuzz } from "./fizzBuzz";

describe("fizzBuzz", () => {
it("should return correct fizz buzz values for a given range", () => {
  expect(fizzBuzz(1, 15)).toEqual(
      { 
          result: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
      }
  );
  })

  it("should handle negative numbers correctly", () => {
    expect(fizzBuzz(-5, 5)).toEqual({
      result: ["Buzz", -4, "Fizz", -2, -1, "FizzBuzz", 1, 2, "Fizz", 4, "Buzz"]
    });
  });

    
});