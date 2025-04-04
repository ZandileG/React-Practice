import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (movie) => {
    setFavourites((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev; //prevents duplicates
      return [...prev, movie];
    });
  };

  const removeFavourite = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavourite = (movieId) => favourites.some((movie) => movie.id === movieId);

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;