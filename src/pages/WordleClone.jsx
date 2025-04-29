import { useState, useEffect } from "react";

const words = ["REACT", "PLANT", "MUSIC", "PEACE", "LIGHT", "WATER", "EARTH"];

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function WordleClone() {
  const [correctWord, setCorrectWord] = useState(getRandomWord());
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setCorrectWord(getRandomWord());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) return;

    const feedback = guess.toUpperCase().split("").map((letter, i) => {
      if (letter === correctWord[i]) return { letter, status: "correct" };
      if (correctWord.includes(letter)) return { letter, status: "present" };
      return { letter, status: "absent" };
    });

    setAttempts([...attempts, feedback]);
    setGuess("");

    if (guess.toUpperCase() === correctWord) setGameOver(true);
    else if (attempts.length >= 5) setGameOver(true);
  }

  function restartGame() {
    setCorrectWord(getRandomWord());
    setAttempts([]);
    setGameOver(false);
    setGuess("");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-green-100 to-white">
      <h1 className="text-3xl font-bold mb-6">Wordle Calm 🌿</h1>

      {attempts.map((attempt, idx) => (
        <div key={idx} className="flex gap-2 mb-2">
          {attempt.map((item, i) => (
            <div key={i} className={`w-12 h-12 flex items-center justify-center text-lg font-bold rounded ${item.status === "correct" ? "bg-green-400" : item.status === "present" ? "bg-yellow-400" : "bg-gray-300"}`}>
              {item.letter}
            </div>
          ))}
        </div>
      ))}

      {!gameOver && (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value.toUpperCase())}
            maxLength={5}
            placeholder="Enter guess"
            className="border p-2 rounded text-center w-32"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      )}

      {gameOver && (
        <div className="text-xl font-semibold mt-4 text-center">
          {attempts[attempts.length - 1]?.map(l => l.letter).join("") === correctWord ? "You Won! 🎉" : `Game Over! The word was ${correctWord}`}
          <div>
            <button onClick={restartGame} className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded">Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WordleClone;
