import { createContext, useContext, useState } from "react";

export const MoviesContext = createContext({});

function useMovies() {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error("useMovies must be used within a MoviesProvider");
  }

  return context;
}

const MoviesProvider = async ({ children }) => {
  const [updater, setUpdater] = useState(true);
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext.Provider
      value={{
        getProducts,
        updater,
        setUpdater,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesProvider, useMovies };
