const passport = require('passport')//tells express how to handle authentication
const GoogleStratergy = require('passport-google-oauth20').Strategy; //specifically for google oauth
const keys = require('../config/keys')
const mongoose = require('mongoose')


const User = mongoose.model('users'); //we are trying to fetch from mongoose from model class users



passport.use(new GoogleStratergy({
    clientID: keys.googleCLIENTID,
    clientSecret: keys.googeleCLIENTSECRET,
    callbackURL: '/auth/google/callback' //the route where the user will be redirected to once the user gives the permission to access their email

}, async(accessToken, refreshToken, profile, done) => {
         
        console.log(profile); //just for debugging
        
        //we are trying to create a new user model instance using User modal class
       const existingUser = await User.findOne({googleId: profile.id})
      
            if(existingUser){
                //we already have a record with given profile id
                done(null,existingUser); // saying to passport we are all finished here, there are no errors and here is the existing user
            }
            else{
                //we dont have a record with given profile id, hence create a user
                 const newUser = await User({googleId: profile.id}).save() //this save() method helps us in saving this record automatically inside the database
                done(null,newUser);  //saying to passport we are all finished here, there are no errors and here is the new existing user
                }
        
    })); // creates a new instance of google passport stratergy (its like telling passport there is a new stratergy available)



    //setting Cookie data
    passport.serializeUser((user, done) => {

        //user.id is the shortcut to get the id from the mongoose for each individual model instance
        //we are not using googleProfileId because user may also use fb,twitter but user.id will always be there
        done(null,user.id) //null in done functions means there are no errors, done function is like nudging passport like something is done

});

//now using deserialize we are turning a id into a mongoose model instance
passport.deserializeUser(async(id,done) => {
   const user = await User.findById(id);
   done(null,user);
});