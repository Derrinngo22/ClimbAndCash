import { useState, useEffect } from "react";
import Header from "./Header";
import ThresholdsDisplay from "./ThresholdsDisplay";
import GameInfo from "./GameInfo";
import DiceButtons from "./DiceButtons";

export default function App() {
  const [level, setLevel] = useState(0);
  const [winnings, setWinnings] = useState(0);
  const [currentCashOut, setCurrentCashOut] = useState(0);
  const [lastRoll, setLastRoll] = useState<number[]>([]);
  const [minAvgToClimb, setMinAvgToClimb] = useState(4.5);
  const [minAvgToStay, setMinAvgToStay] = useState(2.5);
  const [message, setMessage] = useState("Start rolling!");

  useEffect(() => {
    // Generate new thresholds each level
    // const climb = +(Math.random() * 0.6 + 4.4).toFixed(2); // 4.4 - 5.0
    // const stay = +(Math.random() * 0.6 + 2.4).toFixed(2); // 2.4 - 3.0
    const climb = 4;
    const stay = 2.5;
    setMinAvgToClimb(climb);
    setMinAvgToStay(stay);
  }, [level]);

  const rollDice = (numDice: number) => {
    const rolls = Array.from({ length: numDice }, () => Math.floor(Math.random() * 6 + 1));
    const avg = rolls.reduce((a, b) => a + b, 0) / numDice;
    setLastRoll(rolls);

    if (avg >= minAvgToClimb) {
      setLevel((prev) => prev + 1);
      setCurrentCashOut((prev) => prev + 5);
      setMessage("You climbed to the next level!");
    } else if (avg >= minAvgToStay) {
      setMessage("You stayed on the same level.");
    } else {
      const newLevel = level - 2;
      setLevel(newLevel);
      setCurrentCashOut(newLevel * 5);
      setMessage("You fell! Dropped 2 levels.");
    }
  };

  const cashOut = () => {
    setWinnings(winnings + currentCashOut);
    setCurrentCashOut(0);
    setLevel(0);
    setLastRoll([]);
    setMessage(`You cashed out with $${currentCashOut}! Start rolling again!`);
  };

  const reset = () => {
    setLevel(0);
    setWinnings(0);
    setLastRoll([]);
    setMessage("Start rolling!");
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <Header />
      <ThresholdsDisplay minAvgToClimb={minAvgToClimb} minAvgToStay={minAvgToStay} />
      <GameInfo level={level} lastRoll={lastRoll} message={message} winnings={winnings} />
      <DiceButtons rollDice={rollDice} cashOut={cashOut} reset={reset} />
    </div>
  );
}
