const express = require("express");
const Pool = require("pg").Pool;
const app = express();
const port = 2234;
require("dotenv").config();


const pool = new Pool({
  host: "0.0.0.0",
  port: "5432",
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", (req, res) => {
  const query = "select * from api";

  pool.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results.rows);
    }
    res.end();
  });
});

app.listen(port, console.log(`app listening on ${port}`));
