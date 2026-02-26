interface RangeInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function RangeInput({ id, label, value, onChange }: RangeInputProps) {
  return (
    <div>
      <input
        id={id}
        type="number"
        className="border-2 rounded border-gray-300 h-18 w-32 sm:h-24 sm:w-48 text-center"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <label htmlFor={id} className="block text-center mt-2 text-sm md:text-lg">
        {label}
      </label>
    </div>
  );
}

export default RangeInput;