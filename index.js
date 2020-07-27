const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')

const mongoURI = require('./config/keys').mongoURI;
const cookieKey = require('./config/keys').cookieKey;
require('./models/User')
require('./services/passports') //since we are are not exporting or returning anything we just set require  



mongoose.connect(mongoURI);

const app = express();

app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [cookieKey]
}));

//in the below two lines, we are telling passport to use cookie based sessions
app.use(passport.initialize());
app.use(passport.session()); 

require('./routes/authRoutes')(app); //directly writing it here which is clearly valid

const PORT = process.env.PORT || 5000;  // WE MUST USE THE PORT WHICH HEROKU GIVES US
app.listen(PORT); //express telling node to listen in this port