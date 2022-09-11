import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//538b5f67
const API_URL = "http://www.omdbapi.com/?apikey=538b5f67";
const API_KEY = "538b5f67"

// const movie1 = {
//   Title: "No Time to Die: Official Title Reveal of Bond 25",
//   Year: "2019",
//   imdbID: "tt10839440",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BZjA3ZjhiODUtN2QxYy00MzlhLWFlYzYtZTg1ODQ2YjM0YjY3XkEyXkFqcGdeQXVyMzM3ODE4MzY@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    let data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spider man");

  },[]);

  return (
    <div className="container">
      <h1>Movieland</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
