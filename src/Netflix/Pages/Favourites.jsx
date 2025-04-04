import React, { useContext, useState, Fragment } from "react";
import { FavouritesContext } from "../Context/FavouritesContext";
import MovieCard from "../Components/MovieCard";
import Navbar from "../Components/Navbar";
import "../../index.css";

function Favourites() {
  const { favourites, addFavourite, removeFavourite, isFavourite } = useContext(FavouritesContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  const filteredFavourites = favourites.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleClose() {
    setFadeOut(true);
    setTimeout(() => {
      setSelectedMovie(null);
      setFadeOut(false);
    }, 500); //match CSS animation duration
  }

  return (
    <div>
      <Navbar onSearch={setSearchQuery} />

      <div className="favourites-page">
        <h1 className="title">Your Favourites</h1>

        {filteredFavourites.length === 0 ? (
          <p className="title">Nothing found{searchQuery ? ` for "${searchQuery}"` : ""}</p>
        ) : (
          <div className="movie-list">
          {filteredFavourites.map((movie) => (
          <Fragment key={movie.id}>
          <MovieCard movie={movie} onSelect={() =>                    
            setSelectedMovie(selectedMovie?.id === movie.id ? null : movie)
          }/>
            {selectedMovie?.id === movie.id && (
              <div className={`modal-overlay ${fadeOut ? "fade-out" : ""}`} onClick={handleClose}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div>
                  <img className="modal-backdrop" src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`} alt="Movie Poster" />
                  <button className="close" onClick={handleClose}>✕</button></div>

                  <div className="modal-info">
                  <button className="play">Play</button>
                  <button className="add-favourites" onClick={() => addFavourite(selectedMovie)} 
                          style={{display: isFavourite(selectedMovie.id) ? "none" : "inline-block"}}>╋</button>
                  <button className="remove-favourites" onClick={() => removeFavourite(selectedMovie.id)}
                          style={{display: isFavourite(selectedMovie.id)? "inline-block" : "none"}}>✓</button>
                        
                        <h1>{selectedMovie.title}</h1>
                        <p>{selectedMovie.release_date}</p>
                        <p>{selectedMovie.overview}</p>
                  </div>
                </div>
                </div>
                )}
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourites;