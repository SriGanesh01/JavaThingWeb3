import { Link } from "react-router-dom";

function Games() {
  const gamesList = [
    { name: "Tic Tac Toe", path: "/games/tic-tac-toe", description: "A classic mindful game. Outsmart the AI gently." },
    { name: "Wordle Variations", path: "/games/wordle", description: "Find the hidden word — challenge your focus!" },
    { name: "Memory Match", path: "/games/memory", description: "Flip and match cards. Calm your memory and mind." },
    { name: "Rock Paper Scissors", path: "/games/rps", description: "A quick game of choices. Play against simple AI!" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center mb-2">🧘 Therapy & Mind-Calming Games</h1>
      <p className="text-lg text-center text-gray-600 mb-10">Relax and focus with calming mini games designed for peace and mindfulness.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
        {gamesList.map((game, idx) => (
          <Link 
            key={idx} 
            to={game.path} 
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform text-center"
          >
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">{game.name}</h2>
            <p className="text-gray-500">{game.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Games;
