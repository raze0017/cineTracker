import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const GenreMovies = () => {
  const { GenreName } = useParams();
  console.log("Extracted genreName from URL:", GenreName);

  const navigate = useNavigate();
  const location = useLocation();
  const movies = location.state || [];
  const filteredMovies = movies.filter((movie) => movie.genre === GenreName);
  console.log(filteredMovies);

  useEffect(() => {
    console.log("GenreMovies Mounted");
    console.log("Location State:", location.state);
    console.log("Movies Data Passed:", movies);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold">Genre: {GenreName}</h2>
        <button
          onClick={() => navigate("/genres")}
          className="btn btn-primary text-white p-2 rounded"
        >
          Back to Genres
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="border p-4 card bg-base-100 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            <figure>
              <img
                src={movie.poster_url}
                alt={movie.title}
                className="w-full h-80 object-contain"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {movie.title} ({movie.release_year})
              </h2>
              <p>
                <strong>Genre:</strong> {movie.genre}
              </p>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreMovies;
