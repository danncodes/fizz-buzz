import { FizzBuzzValue } from "../types/types";

interface ResultProps {
    item: FizzBuzzValue;
    index: number;
}

function ResultItem({ item, index }: ResultProps) {
    const isFizz = item === 'Fizz';
    const isBuzz = item === 'Buzz';
    const isFizzBuzz = item === 'FizzBuzz';

    let itemStyle = 'border-gray-300 bg-gray-100';
    if (isFizz) itemStyle = 'border-green-500 bg-green-200';
    else if (isBuzz) itemStyle = 'border-yellow-500 bg-yellow-200';
    else if (isFizzBuzz) itemStyle = 'border-purple-500 bg-purple-200';

    return ( 
        <li
            key={index}
            className={`border-2 rounded h-18 w-18 sm:h-24 sm:w-24 lg:h-32 lg:w-32 flex items-center justify-center hover:scale-110 duration-150 transition-transform ${itemStyle}`}
          >
            {item}
        </li>
     );
}

export default ResultItem;