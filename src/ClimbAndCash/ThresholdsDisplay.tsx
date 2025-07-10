export default function ThresholdsDisplay({ minAvgToClimb, minAvgToStay}: { minAvgToClimb: number, minAvgToStay: number }) {
  return (
    <div>
      <h3>🎯 Thresholds:</h3>
      <p>🧗 Climb if avg ≥ {minAvgToClimb}</p>
      <p>😐 Stay if {minAvgToClimb} &gt; avg &gt; {minAvgToStay}</p>
      <p>💀 Fall if avg ≤ {minAvgToStay}</p>
    </div>
  );
}