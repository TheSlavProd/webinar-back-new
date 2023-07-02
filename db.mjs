import { DB_CONFIG } from "./src/config/index.mjs";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(DB_CONFIG.DATABASE, DB_CONFIG.USERNAME, DB_CONFIG.PASSWORD, {
  host: DB_CONFIG.HOST,
  port: DB_CONFIG.PORT,
  dialect: 'postgres',
});
sequelize.sync()