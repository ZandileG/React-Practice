import React, {Fragment, useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import "../../index.css";

function MoviesList({searchQuery}) {

  const NORMAL_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const SEARCH_URL=`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWFiNTYzMzM0ZjdkYjhkZTA5NjIwM2M5M2MxMGFjOSIsIm5iZiI6MTc0MzY3NjgzNy43NzYsInN1YiI6IjY3ZWU2NWE1NWYzYmQ3MjQyZTYyYzUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P4QfnZ9kVWr_pu6PvE0p3gsBn0N9mSbhTECLW3xjukQ"
    },
  };

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

useEffect(() => {
  async function fetchMovies(){
    try {
      const url = searchQuery? SEARCH_URL : NORMAL_URL;
      const {data} = await axios.get(url, options);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  //saves processing power
  const timeOutFunction = setTimeout(() => {
    fetchMovies();
  }, 1000);

  return() => {
    clearTimeout(timeOutFunction);
  }
}, [searchQuery]);

function handleClose(){
  setFadeOut(true);
  setTimeout(() => {
  setSelectedMovie(null);
  setFadeOut(false);
}, 500); //CSS animation duration
};

function addFavourites(){
  setIsFavourite(true);
}

function removeFavourites(){
  setIsFavourite(false);
}

  return(
    <div className="movie-list">
      {movies.map((movie) =>(
        <Fragment key={movie.id}>
          <MovieCard movie={movie} onSelect={() =>
//toggling the selection of movies: if you click on a currently selected movie the code returns null, meaning that the movie will close. If you click on another movie, it will be selected and it will open.
            setSelectedMovie(selectedMovie?.id === movie.id ? null: movie) 
          }/>
          {selectedMovie?.id === movie.id && (
            
            <div className={`modal-overlay ${fadeOut ? "fade-out" : ""}`} onClick={handleClose}>
            <div className="modal-content">
              <div>
              <img className="modal-backdrop" src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`} alt="Movie Poster" />
              <button className="close" onClick={handleClose}>✕</button>
              </div>
              <div className="modal-info">
              <button className="play">Play</button>
              <button className="add-favourites" onClick={addFavourites} style={{display: isFavourite? "none" : "inline-block"}}>╋</button>
              <button className="remove-favourites" onClick={removeFavourites} style={{display: isFavourite? "inline-block" : "none"}}>✓</button>
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
  );
}

export default MoviesList;