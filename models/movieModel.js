import { Sequelize } from "sequelize";

import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Movie = db.define(
  "movies",
  {
    title: DataTypes.STRING,
    release: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
  },
  { freezeTableName: true }
);

export default Movie;

(async () => {
  await db.sync();
})();
