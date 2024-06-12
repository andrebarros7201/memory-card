import "./styles/cards.css";

function Card({ flag }) {
  return (
    <button className="card">
      <img src={`https://flagsapi.com/${flag}/flat/64.png`} alt={flag} />
      <p>{flag}</p>
    </button>
  );
}

export default Card;
