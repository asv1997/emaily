const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')

const mongoURI = require('./config/keys').mongoURI;
const cookieKey = require('./config/keys').cookieKey;
require('./models/User')
require('./models/Survey')
require('./services/passports') //since we are are not exporting or returning anything we just set require  



mongoose.connect(mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [cookieKey]
}));



//in the below two lines, we are telling passport to use cookie based sessions
app.use(passport.initialize());
app.use(passport.session()); 

require('./routes/authRoutes')(app); //directly writing it here which is clearly valid
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


if(process.env.NODE_ENV === 'production'){
    //express will serve up production assets(main.js and main.css)
    app.use(express.static('client/build'));
    
    //express will serve up index.html file if it doesnt understand the route
    const path = require('path')
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}


const PORT = process.env.PORT || 5000;  // WE MUST USE THE PORT WHICH HEROKU GIVES US
app.listen(PORT); //express telling node to listen in this port