require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ Parse URL-encoded data

const useRoutes = require("./routes/router");
console.log("Routes initialized!"); // Add this line

app.use("/", useRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
