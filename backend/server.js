const express = require ('express');
const cors = require ('cors');
const app = express ();
const passport = require ('passport'); //plus passport-local
require ('dotenv').config ();

const apiRoutes = require ('./routes/api');
const authRoutes = require ('./routes/auth');
const initializePassport = require ('./passportConfig');

const PORT = process.env.PORT || 5002;
const corsOptions = {
  origin: 'http://localhost:5002',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

initializePassport (passport);

app.use (cors (corsOptions));

app.use (passport.initialize ());
app.use (express.json ());
app.use (express.urlencoded ({extended: true}));

// Routes
app.use ('/auth', authRoutes);
app.use ('/api', apiRoutes);

app.listen (PORT, () => console.log (`Server is listening on port ${PORT}`));
