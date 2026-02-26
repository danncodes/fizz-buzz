export function fizzBuzz(start: number, end: number): { result: (string | number)[], error: string | null } {

  if (start > end) {
      return  {
        result: [], 
        error: "The start value must be less than or equal to the end value" 
      };
  }
  const rangeSize = end - start + 1 ;
  if (rangeSize > 10000) {
      return  {
        result: [], 
        error: "The range size must be less than or equal to 10000" 
      };
  }

  const result: ("FizzBuzz" | "Fizz" | "Buzz" | number)[] = [];

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