import { useState, useEffect } from "react";
import CardGame from "./CardGame";

const cardImages = [
  {
    src: "/game/city.svg",
    matched: true,
    message: "I'm from Madrid, Spain",
  },
  {
    src: "/game/language.svg",
    matched: false,
    message: "I speak Spanish and English",
  },
  {
    src: "/game/history.svg",
    matched: false,
    message: "I'm a history graduate",
  },
  {
    src: "/game/music.svg",
    matched: false,
    message: "I play guitar and drums",
  },
  {
    src: "/game/teach.svg",
    matched: false,
    message: "I enjoy public speaking",
  },
  {
    src: "/game/hiking.svg",
    matched: false,
    message: "I love hiking in the nature",
  },
];

function Game() {
  const [cards, setCards] = useState([]);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [messages, setMessages] = useState([
    { text: "I'm from Madrid, Spain", icon: "/game/city.svg" },
  ]);

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setMessages([{ text: "I'm from Madrid, Spain", icon: "/game/city.svg" }]);
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
  };

  // handle a choice
  const handleChoice = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setMessages((prev) => [
          ...prev,
          { text: choiceTwo.message, icon: choiceTwo.src },
        ]);
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);

    setDisabled(false);
  };

  // start new game automagically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-6 rounded bg-slate-300 p-6 md:flex-row md:items-start md:justify-evenly">
      <ul className=" flex flex-col gap-4">
        {messages.map((message) => (
          <li
            className="italic text-black opacity-100 transition-opacity duration-300"
            key={message.text}
          >
            <img
              className="mr-2 inline h-auto w-[20px] invert-[0.3]"
              alt="fact icon"
              src={message.icon}
            />
            <p className="inline">{message.text}</p>
          </li>
        ))}
      </ul>

      <div className="md:indline grid h-[210px] w-[280px] grid-cols-4 grid-rows-2 gap-1">
        {cards.map((card) => (
          <CardGame
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
