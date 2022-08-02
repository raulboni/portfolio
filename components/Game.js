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
    message: "My main hobbie is playing guitar",
  },
  {
    src: "/game/teach.svg",
    matched: false,
    message: "I feel comfortable speaking in public",
  },
  {
    src: "/game/design.svg",
    matched: false,
    message: "I'm passionate about coding and web design",
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
    <>
      <h1
        className="mb-12  text-center text-xl text-black"
        onClick={shuffleCards}
      >
        Play this game to know some facts about me!
      </h1>
      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <ul className="items-right flex w-[200px] flex-col gap-4">
          {messages.map((message) => (
            <li
              className="italic text-black opacity-100 transition-opacity duration-300"
              key={message.text}
            >
              <img
                className="mr-2 inline h-auto w-[30px] invert-[0.3]"
                alt="fact icon"
                src={message.icon}
              />
              <p className="inline">{message.text}</p>
            </li>
          ))}
        </ul>

        <div className=" grid w-[300px] grid-cols-4 grid-rows-2 gap-1 ">
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
    </>
  );
}

export default Game;
