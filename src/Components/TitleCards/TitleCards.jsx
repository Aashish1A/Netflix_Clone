import React, { useEffect, useRef } from "react";
import cardsData from "../../assets/cards/Cards_data";

const TitleCards = ({title, category}) => {

// Created a scrollable cards
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="mt-10 mb-7">
      <h2 className="mb-2 text-2xl font-bold">{title?title:'Popular on Netflix'}</h2>
      <div
        className="flex gap-3 overflow-x-scroll scrollbar-hidden"
        ref={cardsRef}
      >
        {cardsData.map((card, index) => {
          return (
            <div className="relative" key={index}>
              <img
                src={card.image}
                alt=""
                className="w-[240px] max-w-none rounded cursor-pointer"
              />
              <p className="absolute bottom-2.5 right-2.5">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
