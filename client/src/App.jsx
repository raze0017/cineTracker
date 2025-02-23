import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Movies from "./components/movies";
import Genres from "./components/Genres";
import Add from "./components/Add";
function App() {
  const [movies, setMovies] = useState([]);
  return (
    <Router>
      <div className="p-6">
        <div className="navbar bg-base-100 flex justify-center">
          <Link
            to="/"
            className="btn btn-ghost sm:text-3xl lg:text-4xl text-primary"
          >
            Movies
          </Link>
          <Link
            to="/Genres"
            className="btn btn-ghost sm:text-3xl lg:text-4xl text-primary"
          >
            Genres
          </Link>
          <Link to="/Add" className="btn btn-secondary sm:text-xs lg:text-xl">
            Add New Movie
          </Link>
        </div>{" "}
      </div>
      <Routes>
        <Route
          path="/"
          element={<Movies movies={movies} setMovies={setMovies} />}
        />
        <Route path="/Genres" element={<Genres data={movies} />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
