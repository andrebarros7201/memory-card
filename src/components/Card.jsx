import "./styles/cards.css";

function Card({ flag, handleClickFlag }) {
  return (
    <button className="card" onClick={() => handleClickFlag(flag)}>
      <img src={`https://flagsapi.com/${flag}/flat/64.png`} alt={flag} />
      <p>{flag}</p>
    </button>
  );
}

export default Card;
