const express = require("express");
const router = express.Router();
const controller = require("../controllers/routerController");
router.get("/", controller.displayMovies);
router.post("/add", controller.addMovies);
router.delete("/:id", controller.deleteMovie);
module.exports = router;
