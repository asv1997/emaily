const passport = require('passport')

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/current_user', (req,res) => {
        if(req.user){
        res.send(req.user); //passport automatically attaches this user object to the request(req)
        }
        else{
            res.send({message: "No user data is available"})
        }
    })

    app.get('/api/logout' , (req,res) => {
        req.logout(); // passport automatically attaches this logout function in this request.
        res.send({message: "You are logged out"})
    });


}
 
