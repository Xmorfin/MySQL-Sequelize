import express from "express";
import cors from "cors";
// import sequelize from "sequelize";
import movieRoute from "./routes/movieRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(movieRoute);

app.listen(5000, (err) => {
  err ? console.log(err) : console.log(`Server running on port 5000`);
});
