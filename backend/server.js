const express = require ('express');
const PORT = process.env.PORT || 3000;
const app = express ();


app.post ('/attendance', (req, res) => {
  let data = req.body;
  console.log (data);
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
        console.log (results.rows);
        res.send ('successful');
      }
    );
  });
});


