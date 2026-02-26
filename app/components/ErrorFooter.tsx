import { FizzBuzzError } from "../types/types";

interface ErrorFooterProps {
  error: FizzBuzzError | null;
}

function ErrorFooter({ error }: ErrorFooterProps) {
  return (
    <footer className="bg-red-400 h-48 w-full fixed bottom-0 left-0 flex items-center justify-center text-white md:text-lg">
      <p className="text-center">{error}</p>
    </footer>
  );
}

export default ErrorFooter;