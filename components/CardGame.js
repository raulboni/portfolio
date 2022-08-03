export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="relative h-[60px] w-[60px] ">
      <img
        className={`absolute h-full w-full border-2  border-black p-4 invert-[.3] ${
          flipped ? "transition-transform" : ""
        }`}
        style={
          !flipped
            ? { transform: "rotateY(90deg)" }
            : { transform: "rotateY(0deg)" }
        }
        src={card.src}
        alt="card front"
      />
      <img
        className={`absolute h-full w-full border-2 border-black p-4  invert-[.6] ${
          !flipped ? "transition-transform" : ""
        }`}
        style={
          flipped
            ? { transform: "rotateY(90deg)" }
            : { transform: "rotateY(0deg)" }
        }
        onClick={handleClick}
        src="/game/question.svg"
        alt="card back"
      />
    </div>
  );
}
