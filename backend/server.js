const express = require('express');
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cyf_student_tracker",
  password: "cyf",
  port: "5432",
});

app.get("/cyf-classes", function (req, res) {
  let selectCohorts = `select * from cohort `;
  pool.query(selectCohorts, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
