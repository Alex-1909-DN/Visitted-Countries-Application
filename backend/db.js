import pkg from "pg";
import dotenv from "dotenv";
const { Client } = pkg;
dotenv.config();
const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Phong@1994",
  port: 5432,
});

db.connect();

export default db;
