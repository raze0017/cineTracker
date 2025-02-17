import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Movies from "./components/movies";
import Genres from "./components/Genres";
import Add from "./components/Add";
function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/`);
        const result = await response.json();
        console.log("API Response:", result);
        setData(result);
      } catch (e) {
        console.error("Error connecting with backend:", e);
      }
    };
    fetchData();
  }, []);

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
        <Route path="/" element={<Movies data={data} />} />
        <Route path="/Genres" element={<Genres data={data} />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
