const pool = require("./pool");
async function getMovies() {
  const { rows } = await pool.query("SELECT * from movies");
  return rows;
}
async function addMovies(data) {
  await pool.query(
    `INSERT INTO movies (title, genre, release_year, description, poster_url) 
     VALUES ($1, $2, $3, $4, $5)`,
    [
      data.title,
      data.genre,
      data.release_year,
      data.description,
      data.poster_url,
    ]
  );
}
async function deleteMovie(id) {
  console.log(id);
  await pool.query(`delete from movies where id=$1`, [id]);
}
async function genreWise(genre) {
  const { rows } = await pool.query(`SELECT * from movies where genre=$1`, [
    genre,
  ]);
  return rows;
}

module.exports = { getMovies, addMovies, deleteMovie };
