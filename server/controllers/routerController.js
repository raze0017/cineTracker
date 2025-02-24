const db = require("../db/queries");
async function displayMovies(req, res) {
  const movieInfo = await db.getMovies();
  res.send(movieInfo);
}
async function addMovies(req, res) {
  try {
    console.log("Data received:", req.body);
    await db.addMovies(req.body);
    res
      .status(201)
      .json({ message: "Movie added successfully", movie: req.body });
  } catch (error) {
    console.error("Error adding movie:", error);
    res.status(500).json({ message: "Failed to add movie" });
  }
}
async function deleteMovie(req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    await db.deleteMovie(id);
    res
      .status(200)
      .json({ message: "Movie deleted successfully", movie: req.body });
  } catch (error) {
    console.log("error in deleting idiot", error);
  }
}
async function genreWise(req, res) {
  const { genre } = req.params;
  const movieInfo = await db.genreWise(genre);
  res.send(movieInfo);
}

module.exports = { displayMovies, addMovies, deleteMovie, genreWise };
