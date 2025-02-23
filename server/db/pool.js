const { Pool } = require("pg");

/*module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "raze",
  database: "cinema",
  password: "raze",
  port: 5432, // The default port
});*/

module.exports = new Pool({
  connectionString:
    process.env.DATABASE_URL || "postgresql://raze:raze@localhost:5432/cinema",
  ssl: { rejectUnauthorized: false }, // Required for Render
});
