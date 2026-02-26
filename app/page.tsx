'use client';

import { useState } from 'react';
import { FizzBuzzError, FizzBuzzValue } from './types/types';
import { fizzBuzz } from './utils/fizzBuzz';
import Header from './components/Header';
import ErrorFooter from './components/ErrorFooter';
import GenerateButton from './components/GenerateButton';
import RangeInput from './components/RangeInput';
import ResultList from './components/ResultList';

export default function Home() {
  const [start, setStart] = useState<number>(1);
  const [end, setEnd] = useState<number>(100);
  const [result, setResult] = useState<Array<FizzBuzzValue>>([]);
  const [error, setError] = useState<FizzBuzzError | null>(null);

  function handleGenerate() {
    const { result, error } = fizzBuzz(start, end);
    setResult(result);
    setError(error);
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <main>
        <Header title="Fizz Buzz Generator" description="Enter a range and see the magic happen." />

        <section>
          <div className="flex justify-center items-center gap-4 mt-10 sm:text-3xl">
            <RangeInput id="input-range-start" label="Start" value={start} onChange={setStart} />
            <RangeInput id="input-range-end" label="End" value={end} onChange={setEnd} />
          </div>

          <div className="flex justify-center mt-10">
            <GenerateButton onClick={handleGenerate} text="Generate FizzBuzz" />
          </div>
        </section>

        <section className="my-10">
          <ResultList result={result} />
        </section>

        {error && <ErrorFooter error={error} />}
      </main>
    </div>
  );
}
