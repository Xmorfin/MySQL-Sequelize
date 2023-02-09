import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovies,
  getMoviesById,
  updateMovie,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/movies", getMovies);
router.get("/movies/:id", getMoviesById);
router.post("/movies", createMovie);
router.patch("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie);

export default router;
