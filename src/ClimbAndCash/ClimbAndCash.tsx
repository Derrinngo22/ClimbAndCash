import { useState, useEffect } from "react";
import Header from "./Header";
import ThresholdsDisplay from "./ThresholdsDisplay";
import GameInfo from "./GameInfo";
import DiceButtons from "./DiceButtons";

    // TODO: 
    // 1. add win and loss conditions
    // 2. add roll and climb animations
    // 3. add conditions based on number of levels climbed. Ex. if fell more than 2 levels, broken leg, reduce up levels temporarily
    
export default function App() {
  const [level, setLevel] = useState(0);
  const [winnings, setWinnings] = useState(0);
  const [lastRoll, setLastRoll] = useState(0);
  const [threshold, setThreshold] = useState(0);
  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(0);
  const [message, setMessage] = useState("Start rolling!");
  const [prevThreshold, setPrevThreshold] = useState(0);

  useEffect(() => {
    setThreshold(getRandomThreshold());
    setWin(getRandomWin());
    setLoss(getRandomLoss());
    reset();
  }, []);

  const getRandomThreshold = () => {
    return Math.floor(Math.random() * 5) + 2;
  };

  const getRandomWin = () => {
    return Math.floor(Math.random() * 3) + 1;
  };

  const getRandomLoss = () => {
    return (Math.floor(Math.random() * 3) + 1) * -1;
  };
  
  const rollDice = () => {
    setPrevThreshold(threshold);
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    setLastRoll(diceRoll);

    setLevel((prevLevel) => {
      const newLevel = diceRoll >= threshold ? prevLevel + win : prevLevel + loss;
      setWinnings(newLevel * 5);
      return newLevel;
    });

    setMessage(diceRoll >= threshold ? "You climbed!" : "You fell!");
    setThreshold(getRandomThreshold());
    setWin(getRandomWin());
    setLoss(getRandomLoss());
  };

  const wait = () => {
    setLastRoll(0);
    setPrevThreshold(threshold);
    setThreshold(getRandomThreshold());
    setWin(getRandomWin());
    setLoss(getRandomLoss());
  }

  const reset = () => {
    setLevel(0);
    setPrevThreshold(0);
    setLastRoll(0);
    setWinnings(0);
    setMessage("Start rolling!");
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <Header />
      <ThresholdsDisplay threshold={threshold} win={win} loss={loss} />
      <GameInfo level={level} lastRoll={lastRoll} prevThreshold={prevThreshold} message={message} winnings={winnings} />
      <DiceButtons rollDice={rollDice} cashOut={wait} reset={reset} />
    </div>
  );
}
