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
});