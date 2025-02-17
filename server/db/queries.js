const pool = require("./pool");
async function getMovies() {
  const { rows } = await pool.query("SELECT * from movies");
  return rows;
}
async function addMovies(data) {
  if (!data || !data.title) {
    throw new Error("Invalid data: Missing title or body is empty");
  }

  const releaseYear = parseInt(data.release_year, 10) || null; // Ensure it's a number

  await pool.query(
    `INSERT INTO movies (title, genre, release_year, description, poster_url) 
     VALUES ($1, $2, $3, $4, $5)`,
    [data.title, data.genre, releaseYear, data.description, data.poster_url]
  );
}

module.exports = { getMovies, addMovies };
