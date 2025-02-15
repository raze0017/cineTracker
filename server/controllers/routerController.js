const db = require("../db/queries");
async function displayMovies(req, res) {
  const movieInfo = await db.getMovies();
  res.send(movieInfo);
}

module.exports = { displayMovies };
