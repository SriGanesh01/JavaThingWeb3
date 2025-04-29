import { useState } from "react";

const options = ["Rock", "Paper", "Scissors"];

function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [aiChoice, setAiChoice] = useState("");
  const [result, setResult] = useState("");

  function play(choice) {
    const ai = options[Math.floor(Math.random() * options.length)];
    setPlayerChoice(choice);
    setAiChoice(ai);

    if (choice === ai) setResult("It's a Tie!");
    else if (
      (choice === "Rock" && ai === "Scissors") ||
      (choice === "Paper" && ai === "Rock") ||
      (choice === "Scissors" && ai === "Paper")
    ) {
      setResult("You Win! 🎉");
    } else {
      setResult("You Lose 😞");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Rock Paper Scissors ✋📝✂️</h1>

      <div className="flex gap-4 mb-6">
        {options.map((opt) => (
          <button 
            key={opt} 
            onClick={() => play(opt)}
            className="bg-white shadow-md p-4 rounded-xl hover:scale-105 transition"
          >
            {opt}
          </button>
        ))}
      </div>

      {result && (
        <div className="text-xl font-semibold text-center">
          <p>You chose: {playerChoice}</p>
          <p>AI chose: {aiChoice}</p>
          <p className="mt-2">{result}</p>
        </div>
      )}
    </div>
  );
}

export default RockPaperScissors;
