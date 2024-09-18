import { configDotenv } from "dotenv";
configDotenv();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const client = "pg";
export const connection = process.env.DATABASE_URL;
export const migrations = {
  tableName: "knex_migrations",
};
