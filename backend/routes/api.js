const passport = require('passport');
const express = require('express');

const { pool } = require('../db/dbConfig');
const router = express.Router();

// check authentication for all routes below
router.use(
  passport.authenticate('jwt', {
    session: false,
  })
);

router.get ('/student-overview/:id/:week/:module1', async (req, res) => {
  student_id = req.params.id;
  week = req.params.week;
  module1 = req.params.module1;
  let student_data;
  let week_attendance;
  let student_attendance;
  let all_classes;
  let student_attendance_percentage;

  let student_overview = {};

  student_data = await pool.query ('select * from student where id = $1', [
    student_id,
  ]);
  student_overview.student_data = student_data.rows[0];

  week_attendance = await pool.query (
    'select status from attendance where student_id = $1 and week = $2 and module1 = $3',
    [student_id, week, module1]
  );
  student_overview.week_attendance = week_attendance.rows[0].status;

  student_attendance = await pool.query (
    "select count(status) from attendance where student_id = $1 and status !='no' ",
    [student_id]
  );
  student_attendance = student_attendance.rows[0].count;

  all_classes = await pool.query (
    'select count(status) from attendance where student_id = $1',
    [student_id]
  );
  all_classes = all_classes.rows[0].count;

  student_attendance_percentage = student_attendance / all_classes * 100;
  student_overview.student_attendance_percentage = student_attendance_percentage.toFixed (
    1
  );

  res.json (student_overview);
});


router.get ('/class-week-overview/:class/:week/:module', async (req, res) => {
  let class_name = req.params.class;
  week = req.params.week;
  module = req.params.module;
  let week_data;
  let week_attendance;
  let all_classes;
  let week_attendance_percentage;
  let week_overview = {};
  week_data = await pool.query (
    'select count(*) from student where cohort_name = $1',
    [class_name]
  );
  week_overview.week_data = week_data.rows[0].count;
  week_attendance = await pool.query (
    "select count(status) from attendance where cohort_name = $1 and week = $2 and module = $3 and status !='no' ",
    [class_name, week, module]
  );
  week_attendance = week_attendance.rows[0].count;
  all_classes = await pool.query (
    'select count(status) from attendance where cohort_name = $1 and week = $2 and module = $3',
    [class_name, week, module]
  );
  all_classes = all_classes.rows[0].count;
  week_attendance_percentage = week_attendance / all_classes * 100;
  week_overview.week_attendance_percentage = week_attendance_percentage.toFixed (
    1
  );
  scores_sum = await pool.query (
    'select sum(score) from score where cohort_name = $1 and week = $2 and module = $3',
    [class_name, week, module]
  );
  scores_sum = scores_sum.rows[0].sum;
  scores_num = await pool.query (
    'select count(score) from score where score >=0 and cohort_name = $1 and week = $2 and module = $3 ',
    [class_name, week, module]
  );
  scores_num = scores_num.rows[0].count;
  score_avg = scores_sum / scores_num;
  week_overview.score_avg = score_avg;
  start_date = await pool.query (
    'select start_date from cohort where name = $1',
    [class_name]
  );
  week_overview.start_date = start_date.rows[0].start_date;
  end_date = await pool.query ('select end_date from cohort where name = $1', [
    class_name,
  ]);
  week_overview.end_date = end_date.rows[0].end_date;
  res.json (week_overview);
});








router.get ('/class-overview/:cohort_name', async (req, res) => {
  let cohort_name = req.params.cohort_name;
  
  let students_names;
  let attendees;
  let all_weeks;
  let scores_sum;
  let scores_num;
  let cohort_overview = {};
  let percentage;
  let score_avg;

  const students = await pool.query(
    'select count(*) from student where cohort_name = $1',
    [cohort_name]
  );
  cohort_overview.students = students.rows[0].count;

  students_names = await pool.query(
    'select name from student where cohort_name = $1',
    [cohort_name]
  );
  cohort_overview.students_names = students_names.rows;

  attendees = await pool.query(
    "select count(status) from attendance where status = 'yes' or status = 'late' and cohort_name =$1",
    [cohort_name]
  );
  attendees = attendees.rows[0].count;

  all_weeks = await pool.query(
    'select count(status) from attendance where cohort_name = $1',
    [cohort_name]
  );
  percentage = (attendees / all_weeks.rows[0].count) * 100;

  cohort_overview.percentage = percentage.toFixed(1);

  scores_sum = await pool.query(
    'select sum(score) from score where cohort_name = $1',
    [cohort_name]
  );
  scores_sum = scores_sum.rows[0].sum;

  scores_num = await pool.query(
    'select count(score) from score where score >=0 and cohort_name = $1',
    [cohort_name]
  );
  scores_num = scores_num.rows[0].count;
  score_avg = scores_sum / scores_num;
  cohort_overview.score_avg = score_avg;

  start_date = await pool.query(
    'select start_date from cohort where name = $1',
    [cohort_name]
  );
  cohort_overview.start_date = start_date.rows[0].start_date;

  end_date = await pool.query('select end_date from cohort where name = $1', [
    cohort_name,
  ]);
  cohort_overview.end_date = end_date.rows[0].end_date;
  res.json(cohort_overview);
});

router.post('/attendance', (req, res) => {
  let data = req.body;
  data.forEach((obj) => {
    pool.query(
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
        res.send('successful');
      }
    );
  });
});

router.get('/modules', function (req, res) {
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

router.get('/classes/:className/students', function (req, res) {
  const { className } = req.params;
  let selectStudents = `select * from student where cohort_name=$1 `;

  pool.query(selectStudents, [className], (err, results) => {
    if (err) {
      res.json(null);
      throw err;
    }
    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

router.get('/classes/:className/attendance', function (req, res) {
  const { className } = req.params;
  let selectAttendance = `select * from attendance where cohort_name=$1 `;
  pool.query(selectAttendance, [className], (err, results) => {
    if (err) {
      res.json(null);
      throw err;
    }
    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

router.get('/classes', function (req, res) {
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

module.exports = router;
