import { Sequelize } from "sequelize";

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const enabledLogs = process.env.DB_ENABLE_LOGS;

export default new Sequelize(
  `mysql://${dbUser}:${dbPass}@${dbHost}:3306/${dbName}`,
  {
    // disable logging; default: console.log in case of production
    // leave it in development
    logging: enabledLogs === "true",
  }
);
