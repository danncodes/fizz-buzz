'use client';

import { useState, useRef } from 'react';
import { FizzBuzzError, FizzBuzzValue } from './types/types';
import { validateRange } from './utils/validateRange';
import { fizzBuzz } from './utils/fizzBuzz';
import Header from './components/Header';
import ErrorFooter from './components/ErrorFooter';
import Button from './components/Button';
import RangeInput from './components/RangeInput';
import ResultList from './components/ResultList';

export default function Home() {
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<Array<FizzBuzzValue>>([]);
  const [error, setError] = useState<FizzBuzzError | null>(null);

  function handleGenerate() {
    if (!startRef.current || !endRef.current) return;
    const validation = validateRange(startRef.current.value.trim(), endRef.current.value.trim());
    
    if ("error" in validation) {
      setResult([]);
      setError(validation.error);
      return;
    }

    const { start, end } = validation;
  
    const { result } = fizzBuzz(start,end);
    setResult(result);
    setError(null);
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <main>
        <Header title="Fizz Buzz Generator" description="Enter a range and see the magic happen." />

        <section>
          <div className="flex justify-center items-center gap-4 mt-10 sm:text-3xl">
            <RangeInput id="input-range-start" label="Start" ref={startRef} defaultValue={1} />
            <RangeInput id="input-range-end" label="End" ref={endRef} defaultValue={100} />
          </div>

          <div className="flex justify-center mt-10">
            <Button onClick={handleGenerate} text="Generate FizzBuzz" />
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
