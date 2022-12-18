import { Sequelize } from "sequelize";

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;

export default new Sequelize(
  `mysql://${dbUser}:${dbPass}@${dbHost}:3306/${dbName}`
);
