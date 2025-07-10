export default function DiceButtons({ rollDice, cashOut, reset }: { rollDice: (numDice: number) => void, cashOut: () => void, reset: () => void }) {
  return (
    <div className="mt-4 flex gap-2 justify-center">
      <button onClick={() => rollDice(1)} className="px-3 py-1 bg-blue-500 text-white rounded">Roll 1 Die</button>
      <button onClick={() => rollDice(2)} className="px-3 py-1 bg-blue-500 text-white rounded">Roll 2 Dice</button>
      <button onClick={() => rollDice(3)} className="px-3 py-1 bg-blue-500 text-white rounded">Roll 3 Dice</button>
      <button onClick={cashOut} className="px-3 py-1 bg-green-600 text-white rounded">Cash Out</button>
      <button onClick={reset} className="px-3 py-1 bg-gray-600 text-white rounded">Reset</button>
    </div>
  );
}
