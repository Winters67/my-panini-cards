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
          <img
            src={`${process.env.PUBLIC_URL}/${card.imageFront}`}
            alt={`Carte ${card.number} recto`}
            className={`front ${getImageClass(card.orientation)}`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/${card.imageBack}`}
            alt={`Carte ${card.number} verso`}
            className={`back ${getImageClass(card.orientation)}`}
          />
          <div className="text">
            <p>Quantité de carte dispo : {card.quantite}</p>
            <p>Disponiblité : {card.dispo}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;
