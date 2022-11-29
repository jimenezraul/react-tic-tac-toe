import Square from './Square';

interface BoardProps {
  squares: string[];
  onClick: (i: number) => void;
}

const Board = ({ squares, onClick }: BoardProps) => (
  <div className='flex justify-center items-center bg-slate-500 w-[260px] h-[260px] rounded'>
    <div className='grid grid-cols-3 gap-1 w-[250px] h-[250px]'>
      {squares.map((square: string, i: number) => {
        return <Square key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  </div>
);

export default Board;
