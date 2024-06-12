function Card({ flag }) {
  return (
    <div className="card">
      <button>
        <img src={`https://flagsapi.com/${flag}/flat/64.png`} alt={flag} />
        <p>{flag}</p>
      </button>
    </div>
  );
}

export default Card;
