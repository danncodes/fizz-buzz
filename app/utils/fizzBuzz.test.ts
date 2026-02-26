import { fizzBuzz } from "./fizzBuzz";

describe("fizzBuzz", () => {
  it("should return correct fizz buzz values for a given range", () => {
    expect(fizzBuzz(1, 15)).toEqual(
        { 
            result: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"], 
            error: null 
        }
    );
    })

    it("should return an error if start is greater than end", () => {
      expect(fizzBuzz(10, 1)).toEqual({
        result: [],
        error: "The start value must be less than or equal to the end value"
      });
    });

    it("should return an error if range size is greater than 10000", () => {
      expect(fizzBuzz(1, 10001)).toEqual({
        result: [],
        error: "The total range size must be less than or equal to 10000"
      });
    });

    it("should return an error if start or end is a decimal number", () => {
    expect(fizzBuzz(1.5, 10)).toEqual({
      result: [],
      error: "The start and end values must be integers"
    });

    expect(fizzBuzz(1, 10.2)).toEqual({
      result: [],
      error: "The start and end values must be integers"
    });
    });

    it("should handle negative numbers correctly", () => {
    expect(fizzBuzz(-5, 5)).toEqual({
      result: ["Buzz", -4, "Fizz", -2, -1, "FizzBuzz", 1, 2, "Fizz", 4, "Buzz"],
      error: null
    });
  });

    
});