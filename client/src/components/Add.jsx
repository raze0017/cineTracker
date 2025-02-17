import { useState } from "react";

const Add = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    release_year: "",
    description: "",
    poster_url: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data to Send:", formData); // 👀 Check if it's empty

    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.log("Error in submitting:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4"
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Movie Title:</span>
          </div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Genre:</span>
          </div>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Enter genre"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Release Year:</span>
          </div>
          <input
            type="number"
            name="release_year"
            value={formData.release_year}
            onChange={handleChange}
            placeholder="Enter year"
            className="input input-bordered w-full max-w-xs"
            min="1900"
            required
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description:</span>
          </div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full max-w-xs"
            placeholder="Enter description"
            required
          ></textarea>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Poster URL:</span>
          </div>
          <input
            type="url"
            name="poster_url"
            value={formData.poster_url}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
