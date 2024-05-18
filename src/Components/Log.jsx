export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={`${turn.square.row} ${turn.square.col}`}>
          {turn.name} |Symbol {turn.player} |Row {turn.square.row} |Col{" "}
          {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
