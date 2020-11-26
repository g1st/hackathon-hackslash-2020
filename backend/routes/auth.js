const passport = require('passport');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { pool } = require('../db/dbConfig');
const router = express.Router();

router.get('/authenticated', (req, res) => {
  console.log('/authenticated called');
  const { id, name } = req.user;
  res.json({ success: true, data: { user: { id, name } } });
});

router.get('/notAuthenticated', (req, res) => {
  console.log('/notAuthenticated called');
  res.status(401).send('notAuthenticated');
});

router.post(
  '/login',
  passport.authenticate('local', {
    session: false,
  }),
  (req, res) => {
    // if reached here - password valid
    const { name, id } = req.user;
    // generate and send token to frontend
    const token = jwt.sign({ email: req.user.email }, 'jwt_secret');
    res.json({ token: token, user: { name, id } });
  }
);

router.post('/token', async (req, res) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    let decoded;
    try {
      decoded = await jwt.verify(token, 'jwt_secret');
    } catch (e) {
      return res.status(401).json({ error: 'Signature not valid' });
    }
    const { email } = decoded;

    pool.query(
      `select * from users where email = $1`,
      [email],
      (err, results) => {
        if (err) {
          throw err;
        }

        if (results.rows.length > 0) {
          const [user] = results.rows;

          return res.json({ token, user: { name: user.name } });
        } else {
          return res.json({ error: { message: 'User not found' } });
        }
      }
    );
  }
  // return res.send(500);
});

router.post('/register', async (req, res) => {
  let { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ message: 'Please fill all of the fields' });
  }

  if (password.length < 8) {
    errors.push({ message: 'Password at least should be 8 characters' });
  }

  if (password != password2) {
    errors.push({ message: 'Passwords do not match' });
  }

  if (errors.length > 0) {
    res.render('register', { errors });
  } else {
    //form validation has passed
    let hashedPassword = await bcrypt.hash(password, 10);

    pool.query(
      `select *from users where email = $1`,
      [email],
      (err, resuls) => {
        if (err) {
          throw err;
        }

        if (resuls.rows.length > 0) {
          errors.push({ message: 'Email is already registered' });
          res.json({ error: { message: 'Email is already registered' } });
        } else {
          pool.query(
            `insert into users (name, email, password)
              values($1, $2, $3)
              returning id, password, email `,
            [name, email, hashedPassword],
            (err, results) => {
              if (err) {
                throw err;
              }

              const [user] = results.rows;
              // create token and send to frontend
              const token = jwt.sign({ email: user.email }, 'jwt_secret');
              res.json({ token: token, user: { name } });
            }
          );
        }
      }
    );
  }
});

module.exports = router;
