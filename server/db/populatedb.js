#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    release_year INT CHECK (release_year > 1900),
    description TEXT,
    poster_url TEXT
);

INSERT INTO movies (title, genre, release_year, description, poster_url) VALUES
('Inception', 'Sci-Fi', 2010, 'A thief who enters the dreams of others to steal secrets gets a chance at redemption.', 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg'),
('The Dark Knight', 'Action', 2008, 'Batman faces the Joker, a criminal mastermind who seeks to create chaos in Gotham.', 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'),
('The Godfather', 'Crime', 1972, 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.', 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'),
('Pulp Fiction', 'Crime', 1994, 'The lives of two hitmen, a boxer, and a gangster intertwine in unexpected ways.', 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'),
('Interstellar', 'Sci-Fi', 2014, 'A group of astronauts travel through a wormhole in search of a new home for humanity.', 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'),
('Forrest Gump', 'Drama', 1994, 'The story of a slow-witted but kind-hearted man witnessing key historical events.', 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg'),
('The Matrix', 'Sci-Fi', 1999, 'A hacker learns the truth about reality and joins a rebellion against machines.', 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'),
('Titanic', 'Romance', 1997, 'A love story set against the backdrop of the Titanic’s ill-fated voyage.', 'https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg');

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://raze:raze@localhost:5432/cinema",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
