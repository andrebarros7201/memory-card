import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
const flags = ["PT", "ES", "FR", "DE", "CH", "PL", "RU", "IT", "US", "BR"];

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedFlags, setClickedFlags] = useState([]);

  const handleClickFlag = (flag) => {
    // Checks if the clicked flag is already in the clicked flags array
    if (clickedFlags.filter((x) => x === flag).length > 0) {
      setScore(0);
      setClickedFlags([]);
    } else {
      setClickedFlags([...clickedFlags, flag]);
      setScore((prevScore) => prevScore + 1);
    }
  };

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Compares the score when the clickedFlags array changes and shuffles the array
  useEffect(() => {
    shuffleArray(flags);
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [bestScore, clickedFlags, score]);

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <div className="flags">
        {flags.map((flag) => (
          <Card key={flag} flag={flag} handleClickFlag={handleClickFlag} />
        ))}
      </div>
    </div>
  );
}

export default App;
