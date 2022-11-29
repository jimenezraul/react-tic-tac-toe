interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button
      className={`h-20 w-20 text-white ${
        value === null
          ? 'bg-white'
          : value === 'X'
          ? 'bg-blue-400'
          : 'bg-green-400'
      }  text-4xl font-bold`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
