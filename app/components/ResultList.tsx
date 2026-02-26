import { FizzBuzzValue } from '../types/types';
import ResultItem from './Result';

interface ResultListProps {
  result: Array<FizzBuzzValue>;
}

function ResultList({ result }: ResultListProps) {
  return (
    <ul className="flex flex-wrap justify-center mt-10 gap-4 md:gap-6 lg:gap-8">
      {result.map((item, index) => {
        return (
          <ResultItem key={index} item={item} index={index} />
        );
      })}
    </ul>
  );
}

export default ResultList;
