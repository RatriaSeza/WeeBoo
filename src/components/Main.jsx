/* eslint-disable react/prop-types */
import { useState } from "react";
import AnimeList from "./AnimeList";

function Main({ animesData }) {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);
  const [isOpen2, setIsOpen2] = useState(true);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }


  return (
    <main className="main">
        <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />
        <div className="box">
          <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
            {isOpen2 ? '–' : '+'}
          </button>
          {isOpen2 && (
            <div className="details">
              <header>
                <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
                <div className="details-overview">
                  <h2>{selectedAnime.title}</h2>
                  <p>
                    {selectedAnime.year} &bull; {selectedAnime.score}
                  </p>
                </div>
              </header>
              <section>
                <p>
                  <em>{selectedAnime.synopsis}</em>
                </p>
              </section>
            </div>
          )}
        </div>
      </main>
  )
}

export default Main;