import React, {Fragment, useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import "../../index.css";

function MoviesList() {

  const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWFiNTYzMzM0ZjdkYjhkZTA5NjIwM2M5M2MxMGFjOSIsIm5iZiI6MTc0MzY3NjgzNy43NzYsInN1YiI6IjY3ZWU2NWE1NWYzYmQ3MjQyZTYyYzUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P4QfnZ9kVWr_pu6PvE0p3gsBn0N9mSbhTECLW3xjukQ"
    },
  };

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

useEffect(() => {
  axios.get(url, options)
  .then((res) => setMovies(res.data.results))
  .catch((err) => console.log(err));
}, []);

  return (
    <div className="movie-list">
      {movies.map((movie) =>(
        <Fragment key={movie.id}>
          <MovieCard movie={movie} onSelect={() =>
                          //toggling the selection of movies: if the selected movie exists, get its id
            setSelectedMovie(selectedMovie?.id === movie.id ? null: movie) 
          }/>
          {selectedMovie?.id === movie.id && (
            <div>
              <p>{selectedMovie.overview}</p>
              <p>{selectedMovie.popularity}</p>
              <p>{selectedMovie.release_date}</p>
            </div>
          )}
        </Fragment>
    ))}
    </div>
  );
}

export default MoviesList;