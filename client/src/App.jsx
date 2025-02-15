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
        console.log("API Response:", result); // Debugging API response

        setData(result);
      } catch (e) {
        console.error("Error connecting with backend:", e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>{" "}
      <button className="btn btn-secondary">Secondary</button>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              {" "}
              <img src={item.poster_url} alt={item.titele} className="poster" />
              <h2>
                {item.title} ({item.release_year})
              </h2>
              <p>
                <strong>Genre:</strong> {item.genre}
              </p>
              <p>{item.description}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
