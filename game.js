// game.js
let level = 1;
let winnings = 0;

function rollDice(numDice) {
  const rolls = [];
  for (let i = 0; i < numDice; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  const avg = rolls.reduce((a, b) => a + b, 0) / numDice;
  document.getElementById("last-roll").textContent = rolls.join(", ");

  const result = checkResult(avg, level);

  if (result === "up") {
    level++;
    document.getElementById("outcome").textContent = "You climbed to the next level!";
  } else if (result === "stay") {
    document.getElementById("outcome").textContent = "You stayed at the same level.";
  } else {
    document.getElementById("outcome").textContent = "You fell! Game over.";
    winnings = 0;
    disableButtons();
  }
  updateUI();
}

function checkResult(avg, level) {
  if (avg >= 4.5 + level * 0.1) return "up";
  else if (avg >= 2.5 + level * 0.1) return "stay";
  else return "fall";
}

function cashOut() {
  winnings = level * 5;
  document.getElementById("outcome").textContent = `You cashed out with $${winnings}!`;
  disableButtons();
  updateUI();
}

function resetGame() {
  level = 1;
  winnings = 0;
  document.getElementById("outcome").textContent = "-";
  document.getElementById("last-roll").textContent = "-";
  enableButtons();
  updateUI();
}

function updateUI() {
  document.getElementById("level").textContent = level;
  document.getElementById("winnings").textContent = winnings;
}

function disableButtons() {
  document.querySelectorAll("button").forEach(btn => {
    if (btn.textContent !== "Reset Game") btn.disabled = true;
  });
}

function enableButtons() {
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = false;
  });
}
