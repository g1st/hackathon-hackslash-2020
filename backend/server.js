const express = require ('express');
const cors = require ('cors');
const PORT = process.env.PORT || 3001;
const app = express ();
const {pool} = require ('./dbConfig ');
const bcrypt = require ('bcrypt');
const session = require ('express-session');
const flash = require ('express-flash');
const passport = require ('passport'); //plus passport-local
require ('dotenv').config ();

const initializePassport = require ('./passportConfig');
const initialize = require ('./passportConfig');
initializePassport (passport);

app.use (
  session ({
    secret: 'secret', // incrypt all the information in the session
    resave: false, // should we resave our session variables if nothing is changed? wich is we dont want to do that
    saveUninitialized: false, // do we want to save our session details when there is no values placed in the session? which is we dont want to do that
  })
);

app.use (passport.initialize ());
app.use (passport.session ());

app.use (flash ()); // to display our flash messages

app.use (express.json ());
app.use (express.urlencoded ({extended: true}));
app.use (cors ());

const {Pool, Client} = require ('pg');

// const pool = new Pool ({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'cyf_student_tracker',
//   password: 'cyf',
//   port: '5432',
// });

app.post (
  '/',
  passport.authenticate ('local', {
    successRedirect: '/authenticated', // if the login successful
    failureRedirect: '/notAuthenticated',
    failureFlash: true, // if we cant authinticate express to render one of the passed failure messages (password not correct or email not registered)
  })
);

app.get ('/authenticated', (req, res) => {
  res.send ('authenticated');
});

app.get ('/notAuthenticated', (req, res) => {
  res.status (401).send ('notAuthenticated');
});

app.post ('/users/register', async (req, res) => {
  let {name, email, password, password2} = req.body;
  console.log ({
    name,
    email,
    password,
    password2,
  });
  let errors = [];
  if (!name || !email || !password || !password2) {
    errors.push ({message: 'Please fill all of the fields'});
  }

  if (password.length < 6) {
    errors.push ({message: 'Password at least should be 6 characters'});
  }

  if (password != password2) {
    errors.push ({message: 'Passwords do not match'});
  }

  if (errors.length > 0) {
    res.render ('register', {errors});
  } else {
    //form validation has passed
    let hashedPassword = await bcrypt.hash (password, 10);
    console.log (hashedPassword);

    pool.query (
      `select *from users where email = $1`,
      [email],
      (err, resuls) => {
        if (err) {
          throw err;
        }
        console.log (resuls.rows);

        if (resuls.rows.length > 0) {
          errors.push ({message: 'Email is already registered'});
          res.render ('register', {errors});
        } else {
          pool.query (
            `insert into users(name,email,password)
            values($1,$2,$3)
         returning id,password `,
            [name, email, hashedPassword],
            (err, results) => {
              if (err) {
                throw err;
              }
              console.log (results.rows);
              req.flash ('success_msg', 'you are now registered please log in');
              res.redirect ('/users/login');
            }
          );
        }
      }
    );
  }
});

app.get ('/cyf-classes', function (req, res) {
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

app.get ('/modules', function (req, res) {
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

app.get ('/cyf-classes/:className/students', function (req, res) {
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

app.get ('/cyf-classes/:className/attendance', function (req, res) {
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

function checkAuthenticated (req, res, next) {
  if (req.isAuthenticated ()) {
    return res.redirect ('/users/dashboard');
  }
  next ();
}

function checkNotAuthenticated (req, res, next) {
  if (req.isAuthenticated ()) {
    return next ();
  }
  res.redirect ('/users/login');
}

app.listen (PORT, () => console.log (`Server is listening on port ${PORT}`));
