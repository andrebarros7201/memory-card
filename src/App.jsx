import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
const flags = ["PT", "ES", "FR", "DE", "CH", "PL", "RU", "IT", "US", "BR"];

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedFlags, setClickedFlags] = useState([]);

  const compareScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <div className="flags">
        {flags.map((flag) => (
          <Card key={flag} flag={flag} />
        ))}
      </div>
    </div>
  );
}

export default App;
