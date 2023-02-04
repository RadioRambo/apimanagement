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

app.get("/search", (req, res) => {
  let id = req.query.id;
  let firstname = req.query.firstname;
  let lastname = req.query.lastname;
  let gender = req.query.gender;
  const query = `select * from api where first_name = $1 or id = $2 or last_name = $3 or gender = $4 `;
  const values = [firstname, id, lastname, gender];
  pool.query(query, values, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results.rows);
    }
    res.end();
  });
});

app.listen(port, console.log(`app listening on ${port}`));
