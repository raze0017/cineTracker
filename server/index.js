const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
const useRoutes = require("./routes/router");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.use("/", useRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
