function Header({ score, bestScore }) {
  return (
    <div className="header">
      <h2>Memory Card - Flags</h2>
      <h3>Best Score is {bestScore}</h3>
      <h3>Current Score is {score}</h3>
    </div>
  );
}

export default Header;
