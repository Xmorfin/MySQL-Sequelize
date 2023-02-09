import Movie from "../models/movieModel.js";

export const getMovies = async (req, res) => {
  try {
    const response = await Movie.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(`Message: ${error.message}`);
  }
};

export const getMoviesById = async (req, res) => {
  try {
    const response = await Movie.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createMovie = async (req, res) => {
  try {
    await Movie.create(req.body);
    res.status(201).json({ message: "Create success" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMovie = async (req, res) => {
  try {
    await Movie.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "UPDATE success" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await Movie.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "DELETE success" });
  } catch (error) {
    console.log(error.message);
  }
};
