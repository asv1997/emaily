const mongoose = require('mongoose')
const Schema = mongoose.Schema; // const {Schema} = mongoose; ----they are both same, the latter one uses destructuring

const userSchema = new Schema({
    googleId : String
});

mongoose.model('users', userSchema); //if it already users collections exist, it will not overwrite. only create if it doesnt exists.

