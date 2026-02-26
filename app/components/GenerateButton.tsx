interface GenerateButtonProps {
  onClick: () => void;
  text: string;
}

function GenerateButton({ onClick, text }: GenerateButtonProps) {
  return (
    <button
      className="bg-orange-500 hover:bg-orange-600 duration-150 hover:scale-105 text-white font-bold py-4 px-8 rounded cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default GenerateButton;
