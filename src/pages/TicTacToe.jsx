import { useState, useEffect } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const lines = [
    [0,1,2], [3,4,5], [6,7,8], // Rows
    [0,3,6], [1,4,7], [2,5,8], // Columns
    [0,4,8], [2,4,6]           // Diagonals
  ];

  function checkWinner(b) {
    for (const [a, b1, c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
        return b[a];
      }
    }
    if (!b.includes(null)) return "Draw";
    return null;
  }

  function playerMove(index) {
    if (board[index] || winner || !isPlayerTurn) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);
  }

  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      setWinner(result);
      return;
    }

    if (!isPlayerTurn) {
      const timer = setTimeout(() => {
        aiMove();
      }, 400); // slight delay for realism
      return () => clearTimeout(timer);
    }
  }, [board, isPlayerTurn]);

  function aiMove() {
    const bestMove = findBestMove(board);
    if (bestMove !== -1) {
      const newBoard = [...board];
      newBoard[bestMove] = "O";
      setBoard(newBoard);
      setIsPlayerTurn(true);
    }
  }

  function findBestMove(board) {
    let bestScore = -Infinity;
    let move = -1;
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = "O";
        const score = minimax(board, 0, false);
        board[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  }

  function minimax(board, depth, isMaximizing) {
    const result = checkWinner(board);
    if (result !== null) {
      if (result === "O") return 10 - depth;
      if (result === "X") return depth - 10;
      return 0;
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (!board[i]) {
          board[i] = "O";
          const score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (!board[i]) {
          board[i] = "X";
          const score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-white py-8 px-4">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">Tic Tac Toe 🎯</h1>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 w-full max-w-xs sm:max-w-sm">
        {board.map((cell, idx) => (
          <div
            key={idx}
            onClick={() => playerMove(idx)}
            className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center text-4xl sm:text-5xl font-bold cursor-pointer hover:bg-indigo-100 transition-all"
          >
            {cell}
          </div>
        ))}
      </div>

      {winner && (
        <div className="text-2xl sm:text-3xl font-semibold mb-4 text-indigo-600 text-center">
          {winner === "Draw" ? "It's a Draw! 🤝" : `${winner} Wins! 🎉`}
        </div>
      )}

      <button
        onClick={resetGame}
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-6 py-2 rounded-full transition-all"
      >
        Restart Game
      </button>
    </div>
  );
}

export default TicTacToe;
