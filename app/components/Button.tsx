interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button
      className="bg-orange-500 hover:bg-orange-600 duration-150 hover:scale-105 text-white font-bold py-4 px-8 rounded cursor-pointer"
    >
      {text}
    </button>
  );
}

export default Button;
