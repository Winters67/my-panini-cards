import React, { useState, useEffect } from "react";
import cardsData from "../../Data/Card.json";
import "./CardDisplay.css";

const CardDisplay = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData.cards);
  }, []);

  const handleCardHover = (cardIndex) => {
    const newCards = [...cards];
    newCards[cardIndex].isHovered = true;
    setCards(newCards);
  };

  const handleCardLeave = (cardIndex) => {
    const newCards = [...cards];
    newCards[cardIndex].isHovered = false;
    setCards(newCards);
  };

  const getImageClass = (orientation) => {
    return orientation === "portrait" ? "image-portrait" : "image-paysage";
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card ${card.isHovered ? "is-hovered" : ""}`}
          onMouseEnter={() => handleCardHover(index)}
          onMouseLeave={() => handleCardLeave(index)}
        >
          <div className="card-face front">
            <img
              src={`${process.env.PUBLIC_URL}/${card.imageFront}`}
              alt={`Carte ${card.number} recto`}
              className={`front-image ${getImageClass(card.orientation)}`}
            />
          </div>
          <div className="card-face back">
            <img
              src={`${process.env.PUBLIC_URL}/${card.imageBack}`}
              alt={`Carte ${card.number} verso`}
              className={`back-image ${getImageClass(card.orientation)}`}
            />
            <div className={`text ${card.isFlipped ? "visible" : "hidden"}`}>
              <p>Quantité de carte disponible : {card.quantite}</p>
              <p>Disponibilité : {card.dispo}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;
