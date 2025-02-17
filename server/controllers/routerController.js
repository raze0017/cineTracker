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

module.exports = { displayMovies, addMovies };
