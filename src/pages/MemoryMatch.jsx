import { useState } from "react";

const initialCards = [
  "🍎", "🍎", "🎵", "🎵", "🌸", "🌸", "🌟", "🌟"
].sort(() => Math.random() - 0.5);

function MemoryMatch() {
  const [cards, setCards] = useState(initialCards);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  function handleFlip(index) {
    if (flipped.length === 2 || flipped.includes(index)) return;

    setFlipped([...flipped, index]);

    if (flipped.length === 1) {
      const first = flipped[0];
      if (cards[first] === cards[index]) {
        setMatched([...matched, first, index]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Memory Match 🧠</h1>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center text-2xl cursor-pointer"
            onClick={() => handleFlip(idx)}
          >
            {flipped.includes(idx) || matched.includes(idx) ? card : "❓"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoryMatch;
