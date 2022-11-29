import Board from './Board';
import { useState } from 'react';
import { calculateWinner } from '../utils/calculateWinner';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i: number) => {
    const boardCopy = [...board];

    if (winner || boardCopy[i]) return;

    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-slate-200'>
      <div className='flex justify-center items-center shadow'>
        <Board squares={board} onClick={(i) => handleClick(i)} />
      </div>
      <div className='mt-4 flex flex-col items-center justify-center'>
        <div>
          <p className='bg-white px-5 py-2 rounded-full shadow'>
            {winner
              ? 'Winner: ' + winner
              : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
          </p>
        </div>
        <button
          className='bg-white px-5 py-2 rounded-full shadow mt-4'
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default Game;
