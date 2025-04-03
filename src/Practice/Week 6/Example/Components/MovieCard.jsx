import React from "react";
import "../index.css";

function MovieCard({movie, onSelect}) {
  return (
    <div onClick={onSelect} className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;