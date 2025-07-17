export default function ThresholdsDisplay({ threshold, win, loss}: { threshold: number, win: number, loss: number }) {
  return (
    <div>
      <p>🎯 Level Threshold: {threshold}</p>
      <p>🧗 Climb: {win} levels</p>
      <p>💀 Fall {loss} levels</p>
    </div>
  );
}