/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function Movies({ movies, setMovies }) {
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/`);
        const result = await response.json();
        console.log("API Response:", result);
        setMovies(result);
      } catch (e) {
        console.error("Error connecting with backend:", e);
      }
    };
    fetchData();
  }, []);

  if (!movies || movies.length === 0) {
    return <div>Add new movies</div>;
  }
  async function deleteMovies(id) {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.log("Erro deleting a movie:", error);
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {movies.map((item) => (
        <div
          key={item.id}
          className="card bg-base-100 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
        >
          <figure>
            <img
              src={item.poster_url}
              alt={item.title}
              className="w-full h-80 object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title} ({item.release_year})
            </h2>
            <p>
              <strong>Genre:</strong> {item.genre}
            </p>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">More Info</button>
              <button
                onClick={() => deleteMovies(item.id)}
                className="btn btn-accent"
              >
                Delete Movie
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
