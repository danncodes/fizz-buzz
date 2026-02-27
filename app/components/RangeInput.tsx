import { forwardRef } from "react";

interface RangeInputProps {
  id: string;
  label: string;
  defaultValue: number;
}

const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  ({ id, label, defaultValue }, ref) => {
    return (
      <div>
        <input
          id={id}
          type="number"
          className="border-2 rounded border-gray-300 h-18 w-32 sm:h-24 sm:w-48 text-center"
          ref={ref}
          defaultValue={defaultValue}
        />
        <label
          htmlFor={id}
          className="block text-center mt-2 text-sm md:text-lg"
        >
          {label}
        </label>
      </div>
    );
  }
);

RangeInput.displayName = "RangeInput";

export default RangeInput;