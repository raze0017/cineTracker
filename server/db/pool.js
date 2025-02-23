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
    process.env.DATABASE_URL ||
    "postgresql://cinema_yqio_user:An4vsFX7qVLrJX0UP0InfEpWEoQTm0sC@dpg-cutko7ij1k6c738dd5fg-a.oregon-postgres.render.com/cinema_yqio",
  ssl: { rejectUnauthorized: false }, // Required for Render
});
