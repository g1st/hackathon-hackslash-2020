const express = require('express');
const cors = require('cors');
const app = express();
const passport = require('passport'); //plus passport-local
require('dotenv').config();

const apiRoutes = require('./routes/api');

const authRoutes = require('./routes/auth');

const initializePassport = require('./passportConfig');


const production = process.env.NODE_ENV === 'production';

const PORT = production ? process.env.PORT : 3001;
const corsOptions = {
  origin: production ? process.env.FRONTEND_URL : 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

initializePassport(passport);

app.use(cors(corsOptions));

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
