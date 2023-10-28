import React, { useState, useRef } from 'react';

function SliderCustom() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([
    { id: 1, text: 'Card 1', showText: false },
    { id: 2, text: 'Card 2', showText: false },
    { id: 3, text: 'Card 3', showText: false },
    { id: 4, text: 'Card 1', showText: false },
    { id: 5, text: 'Card 2', showText: false },
    { id: 6, text: 'Card 3', showText: false },
    { id: 7, text: 'Card 1', showText: false },
    { id: 8, text: 'Card 2', showText: false },
    { id: 9, text: 'Card 3', showText: false },
    // Daha fazla card ekleyebilirsiniz.
  ]);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleButtonClick = (id, index) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, showText: !card.showText };
      } else {
        return { ...card, showText: false };  // Diğer kartların metni gizlenir
      }
    });
    setCards(newCards);
    setSelectedCard(id);
    const cardWidth = 200;  // Kartın genişliğini (width) temsil ediyor
    setScrollPosition(cardWidth * index);
  };

  return (
    <div ref={containerRef} className="relative flex overflow-x-scroll">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`border m-2 p-4 ${card.showText ? 'w-64' : 'w-48'} ${
            selectedCard === card.id ? 'border-b-4 border-blue-500' : ''
          }`}
          onClick={() => handleButtonClick(card.id, index)}
        >
          <button>Buton</button>
          {card.showText && <p className="mt-2">{card.text}</p>}
        </div>
      ))}
      <div
        className="absolute h-2 bg-blue-500 bottom-0"
        style={{
          left: `${scrollPosition}px`,
          width: '50px',  // İstediğiniz genişliği ayarlayabilirsiniz
        }}
      ></div>
    </div>
  );
}

export default SliderCustom;
