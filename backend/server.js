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

app.get("/modules", function (req, res) {
  let selectModules = `select * from module`; //modify this line
  pool.query(selectModules, (err, results) => {
    if (err) {
      res.json(null);
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows); 
    }
  });
});

app.get("/cyf-classes/:className/students", function (req, res) {
  const { className } = req.params;
  let selectStudents = `select * from student where cohort_name=$1 `; 
  pool.query(selectStudents,[className],(err, results) => {
    if (err) {
      res.json(null)
      throw err;
    }
    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});



app.get("/cyf-classes/:className/attendance", function (req, res) {
  const { className } = req.params;
  let selectAttendance = `select * from attendance where cohort_name=$1 `; 
  pool.query(selectAttendance,[className],(err, results) => {
    if (err) {
      res.json(null)
      throw err;
    }
    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
