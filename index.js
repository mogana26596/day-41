const express = require('express');
const mongo = require('./connect');
const dotenv = require('dotenv');
const studentRouter1 = require('./Router/studentRouter');
const mentorRouter1 = require('./Router/mentorRouter');

dotenv.config();
mongo.connect();
const app = express();
app.use(express.json());

app.use('/mentor', mentorRouter1);
app.use('/student', studentRouter1);
app.listen(process.env.PORT);