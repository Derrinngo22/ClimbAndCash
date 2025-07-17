export default function GameInfo({ level, lastRoll, prevThreshold, message, winnings }: { level: number, lastRoll: number, prevThreshold: number, message: string, winnings: number }) {

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Game Info</h3>
      <p>📈 Level: <strong>{level}</strong></p>
      <p className="mt-4">🎲 Last Roll: {lastRoll} | Last Threshold: {prevThreshold}</p>
      <p className="mt-2">📝 {message}</p>
      <p className="mt-2">💰 Reward: ${winnings}</p>
    </div>
  );
}
