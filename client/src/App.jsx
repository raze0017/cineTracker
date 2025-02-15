import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [data, setData] = useState([
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      release_year: 2010,
      description:
        "A thief who enters dreams to steal secrets gets a chance at redemption.",
      poster_url:
        "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    },
  ]);

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
    <div className="p-6">
      <h1 className="text-3xl font-bold underline mb-6">Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data &&
          data.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-xl">
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
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
