import React, { useEffect, useRef, useState } from "react";
import cardsData from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmM4NzQwOTcxNDk2MjZjNGEwZDdlZWM3ZWI0ZmEyOSIsIm5iZiI6MTc0NDcxNjM2Ny43ODQ5OTk4LCJzdWIiOiI2N2ZlNDI0ZjdjMjlhZTViYzNkOTk4ZTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1Jn5trI58q_4QrMtJoSSQ5e8NpG0YrLT1E5YqggVTaE",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="mt-10 mb-7">
      <h2 className="mb-2 text-2xl font-bold">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div
        className="flex gap-3 overflow-x-scroll scrollbar-hidden"
        ref={cardsRef}
      >
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="relative" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
                className="w-[240px] max-w-none rounded cursor-pointer"
              />
              <p className="absolute bottom-2.5 right-2.5">
                {card.original_title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
