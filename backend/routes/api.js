const passport = require ('passport');
const express = require ('express');

const {pool} = require ('../db/dbConfig');
const router = express.Router ();

// check authentication for all routes below
router.use (
  passport.authenticate ('jwt', {
    session: false,
  })
);

router.post ('/attendance', (req, res) => {
  let data = req.body;
  data.forEach (obj => {
    pool.query (
      `insert into attendance(status,student_id,cohort_name,week ,module,mentor_id,date)
            values($1,$2,$3,$4,$5,$6,$7)`,
      [
        obj.status,
        obj.student_id,
        obj.cohort_name,
        obj.week,
        obj.module,
        obj.mentor_id,
        obj.date,
      ],
      (err, results) => {
        if (err) {
          throw err;
        }
        res.send ('successful');
      }
    );
  });
});

router.get ('/modules', function (req, res) {
  let selectModules = `select * from module`; //modify this line
  pool.query (selectModules, (err, results) => {
    if (err) {
      res.json (null);
      throw err;
    }

    if (results.rows.length > 0) {
      res.json (results.rows);
    }
  });
});

router.get ('/classes/:className/students', function (req, res) {
  const {className} = req.params;
  let selectStudents = `select * from student where cohort_name=$1 `;

  pool.query (selectStudents, [className], (err, results) => {
    if (err) {
      res.json (null);
      throw err;
    }
    if (results.rows.length > 0) {
      res.json (results.rows);
    }
  });
});

router.get ('/classes/:className/attendance', function (req, res) {
  const {className} = req.params;
  let selectAttendance = `select * from attendance where cohort_name=$1 `;
  pool.query (selectAttendance, [className], (err, results) => {
    if (err) {
      res.json (null);
      throw err;
    }
    if (results.rows.length > 0) {
      res.json (results.rows);
    }
  });
});

router.get ('/classes', function (req, res) {
  let selectCohorts = `select * from cohort `;
  pool.query (selectCohorts, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json (results.rows);
    }
  });
});

module.exports = router;
