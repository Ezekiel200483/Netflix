
import "./App.css";
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import House from '../src/images/House of cards.jpeg';
import Ozark from "../src/images/ozark.jpeg";
import Sense from "../src/images/sense.jpeg";
import Alien from "../src/images/Alien.jpeg";
import Murder from "../src/images/Murder.jpeg";
import Sheldon from "../src/images/Sheldon.jpeg";
import Peaky from "../src/images/Peaky.jpeg";
import Code from "../src/images/code.jpeg";
import fight from "../src/images/download.jpeg";
import titanic from "../src/images/titanic.jpeg";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "HOUSE OF CARDS",
      description: "A mind-bending thriller.",
      posterURL: House,
      rating: 4.8,
    },
    {
      title: "OZARK",
      description: "A story of hope and perseverance.",
      posterURL: Ozark,
      rating: 4.9,
    },
    {
      title: "Sense8",
      description: "The Joker wreaks havoc in Gotham.",
      posterURL: Sense,
      rating: 4.7,
    },
    {
      title: "The Alienist",
      description: "Quentin Tarantino's masterpiece.",
      posterURL: Alien,
      rating: 4.6,
    },
    {
      title: "How to Get away with Murderer ",
      description: "A classic crime drama.",
      posterURL: Murder,
      rating: 4.9,
    },
    {
      title: "Young Sheldon",
      description: "Life is like a box of chocolates.",
      posterURL: Sheldon,
      rating: 4.5,
    },
    {
      title: "Peaky Blinders",
      description: "Welcome to the real world.",
      posterURL: Peaky,
      rating: 4.7,
    },
    {
      title: "Criminal Code",
      description: "A true story of humanity.",
      posterURL: Code,
      rating: 4.8,
    },
    {
      title: "Fight Club",
      description: "The first rule of Fight Club is...",
      posterURL: fight,
      rating: 4.5,
    },
    {
      title: "Titanic",
      description: "A tale of love and tragedy.",
      posterURL: titanic,
      rating: 4.6,
    },
  ]);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const addMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      setMovies([...movies, newMovie]);
      setNewMovie({
        title: "",
        description: "",
        posterURL: "",
        rating: 0,
      });
    } else {
      alert("Please fill out all fields before adding a new movie.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  const filterMovies = ({ title, rating }) => {
    // Implement filtering logic based on title and rating
    const filteredMovies = movies.filter((movie) => {
      const titleMatch = movie.title
        .toLowerCase()
        .includes(title.toLowerCase());
      const ratingMatch = rating === "" || movie.rating >= parseFloat(rating);

      return titleMatch && ratingMatch;
    });

    setMovies(filteredMovies);
  };

  return (
    <div className="app">
      <h1>NETFLIX</h1>
      <Filter onFilter={filterMovies} />

      <MovieList movies={movies} />

      <div className="add-movie-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={handleInputChange}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
    </div>
  );
};

export default App;
