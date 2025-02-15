const pool = require("./pool");
async function getMovies() {
  const { rows } = await pool.query("SELECT * from movies");
  return rows;
}
module.exports = { getMovies };
