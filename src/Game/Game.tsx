import Board from './Board';
import { useState, useEffect } from 'react';
import { calculateWinner } from '../utils/calculateWinner';

const Game = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState<boolean>(true);
  const winner = calculateWinner(board);
  const [score, setScore] = useState<{ x: number; o: number }>({
    x: 0,
    o: 0,
  });

  useEffect(() => {
    const updateScore = () => {
      if (winner) {
        if (xIsNext) {
          setScore({ ...score, o: score.o + 1 });
          return;
        } else {
          setScore({ ...score, x: score.x + 1 });
          return;
        }
      }
    };
    updateScore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);

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
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-slate-800'>Tic Tac Toe</h1>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-2xl font-bold text-slate-800'>Score</h2>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold text-slate-800'>X: {score.x}</h2>
            <h2 className='text-2xl font-bold text-slate-800'>O: {score.o}</h2>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center shadow'>
        <Board squares={board} onClick={(i) => handleClick(i)} />
      </div>
      <div className='mt-4 flex flex-col items-center justify-center'>
        <div>
          <p className='bg-white px-5 py-2 rounded-full shadow'>
            {winner ? winner : 'Player: ' + (xIsNext ? 'X' : 'O')}
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
