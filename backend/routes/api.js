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

<<<<<<< Updated upstream
app.get ('/class-overview/:cohort_name', async (req, res) => {
  let cohort_name = req.params.cohort_name;
  console.log (cohort_name);

  let students_names;

  let attendees;
  let all_weeks;
  let scores_sum;
  let scores_num;
  let cohort_overview = {};
  let percentage;
  let score_avg;

  const students = await pool.query (
<<<<<<< Updated upstream
    'select count(*) from student filter where cohort_name = $1',
=======
    'select count(*) from student where cohort_name = $1',
>>>>>>> Stashed changes
    [cohort_name]
  );
  cohort_overview.students = students.rows[0].count;

  students_names = await pool.query (
    'select name from student where cohort_name = $1',
    [cohort_name]
  );
  cohort_overview.students_names = students_names.rows;

  attendees = await pool.query (
    "select count(status) from attendance where status = 'yes' or status = 'late' and cohort_name =$1",
    [cohort_name]
  );
  attendees = attendees.rows[0].count;

  all_weeks = await pool.query (
    'select count(status) from attendance where cohort_name = $1',
    [cohort_name]
  );
  percentage = attendees / all_weeks.rows[0].count * 100;

  cohort_overview.percentage = percentage.toFixed (1);

  scores_sum = await pool.query (
    'select sum(score) from score where cohort_name = $1',
    [cohort_name]
  );
  scores_sum = scores_sum.rows[0].sum;

  scores_num = await pool.query (
    'select count(score) from score where score >=0 and cohort_name = $1',
    [cohort_name]
  );
  scores_num = scores_num.rows[0].count;
  score_avg = scores_sum / scores_num;
  cohort_overview.score_avg = score_avg;

  start_date = await pool.query (
    'select start_date from cohort where name = $1',
    [cohort_name]
  );
  cohort_overview.start_date = start_date.rows[0].start_date;

  end_date = await pool.query ('select end_date from cohort where name = $1', [
    cohort_name,
  ]);
  cohort_overview.end_date = end_date.rows[0].end_date;
  res.json (cohort_overview);
});

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
