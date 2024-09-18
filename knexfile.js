import { configDotenv } from "dotenv";
configDotenv();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const client = "pg";
export const connection = {
  host: process.env.PGHOST,
  port: process.env.PGPORT | 5432,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
}
export const migrations = {
  tableName: "knex_migrations",
};
