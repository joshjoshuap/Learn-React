import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovies';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async (apiURL) => {
    apiURL = 'https://sample-movie-api-d7000-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json'; // url link
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(apiURL); // fetching api url
      // check if response fetch is correct
      if (!res.ok) {
        throw new Error('Fetch Failed');
      }

      const data = await res.json(); // convert JSON to object

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          realeseDate: data[key].relesaeData
        });
      }
      setMovies(loadedMovies);
    } catch (err) {
      setError(err.message)
      console.error("Fetch Error", error); // if fetch failed
    }

    setIsLoading(false);
  }

  async function addMovieHandler(movie) {
    const res = await fetch('https://sample-movie-api-d7000-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'Application.json'
      }
    });
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No Movies Found</p>}
        {isLoading && <p>Loading</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
