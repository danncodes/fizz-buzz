interface ButtonProps {
  text: string;
  disabled?: boolean;
}

function Button({ text, disabled = false }: ButtonProps) {

  const activeClass = "bg-orange-500 hover:bg-orange-600 duration-150 hover:scale-105 cursor-pointer";
  const disabledClass = "bg-orange-300 text-white/70 cursor-not-allowed opacity-60";
  return (
    <button
      className={`text-white font-bold py-4 px-8 rounded ${disabled ? disabledClass : activeClass}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
