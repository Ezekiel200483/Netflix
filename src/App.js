import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import movies from './component/moviesData'; // Import the movies array
const App = () => {
  const [moviesData, setMoviesData] = useState(movies);

  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  const handleFilterChange = (filters) => {
    // Implement filtering logic based on title and rate filters
    const filtered = movies.filter((movie) => {
      const titleMatch = movie.title
        .toLowerCase()
        .includes(filters.title.toLowerCase());
      const rateMatch =
        filters.rating === "" || movie.rating >= parseInt(filters.rating);

      return titleMatch && rateMatch;
    });

    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMoviesData((prevMovies) => [...prevMovies, { id: Date.now(), ...newMovie }]);
  };

  return (
    <div className="app">
      <h1>NETFLIX</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
};

const AddMovieForm = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({ title: '', description: '', rating: '', posterURL: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the new movie data 
    if (newMovie.title && newMovie.rating && newMovie.posterURL) {
      onAddMovie(newMovie);
      setNewMovie({ title: '', description: '', rating: '', posterURL: '' });
    }
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h2>Add a New Movie</h2>
      <label>
        Title:
        <input type="text" name="title" value={newMovie.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={newMovie.description} onChange={handleChange} />
      </label>
      <label>
        Rating:
        <input type="number" name="rating" value={newMovie.rating} onChange={handleChange} />
      </label>
      <label>
        Poster URL:
        <input type="text" name="posterURL" value={newMovie.posterURL} onChange={handleChange} />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default App;




