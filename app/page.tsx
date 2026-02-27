'use client';

import { useState } from 'react';
import { FizzBuzzValue } from './types/types';
import { validateRange } from './utils/validateRange';
import { fizzBuzz } from './utils/fizzBuzz';
import Header from './components/Header';
import ErrorFooter from './components/ErrorFooter';
import Button from './components/Button';
import RangeInput from './components/RangeInput';
import ResultList from './components/ResultList';

export default function Home() {
  const [start, setStart] = useState<string>("1");
  const [end, setEnd] = useState<string>("100");
  const [result, setResult] = useState<Array<FizzBuzzValue>>([]);

  const validation = validateRange(start, end);
  const isValid = !('error' in validation);
  const liveError = 'error' in validation ? validation.error : null;

  function handleGenerate(e: React.SubmitEvent) {
    e.preventDefault();

    if (!isValid) {
      setResult([]);
      return;
    }

    const { start: validatedStart, end: validatedEnd } = validation;
    const { result } = fizzBuzz(validatedStart, validatedEnd);

    setResult(result);
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <main>
        <Header title="Fizz Buzz Generator" description="Enter a range and see the magic happen." />

        <form onSubmit={handleGenerate}>
          <div className="flex justify-center items-center gap-4 mt-10 sm:text-3xl">
            <RangeInput id="input-range-start" label="Start" value={start} onChange={setStart} />
            <RangeInput id="input-range-end" label="End" value={end} onChange={setEnd} />
          </div>

          <div className="flex justify-center mt-10">
            <Button text="Generate FizzBuzz" disabled={!isValid} />
          </div>
        </form>

        <section className="my-10">
          <ResultList result={result} />
        </section>

        {liveError && <ErrorFooter error={liveError} />}
      </main>
    </div>
  );
}