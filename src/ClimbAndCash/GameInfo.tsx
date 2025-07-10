export default function GameInfo({ level, lastRoll, message, winnings }: { level: number, lastRoll: number[], message: string, winnings: number }) {
  let average: string | number = lastRoll.reduce((a, b) => a + b, 0) / lastRoll.length;
  average = lastRoll.length > 0 ? average.toFixed(2) : "-";
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Game Info</h3>
      <p>📈 Level: <strong>{level}</strong></p>
      <p className="mt-4">🎲 Last Roll: {lastRoll.join(", ") || "-"} | Average: {average}</p>
      <p className="mt-2">📝 {message}</p>
      <p className="mt-2">💵 Current Cashout: ${level * 5}</p>
      <p className="mt-2">💰 Total Winnings: ${winnings}</p>
    </div>
  );
}
