const passport = require("passport");

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google',
      {
        scope: ['profile', 'email']
      }));
  
    app.get('/user', (req, res) => {
      res.send(req.user);
    });
  
    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {

        console.log("***printing req.user ****");
        console.log(req.user);
        console.log("***END***");
      
      res.redirect('/' + req.user.googleId +'/mycollection');
    });


    //github oauth routes
    app.get('/auth/github', passport.authenticate('github',
    {
      scope: ['profile', 'email']
    }));

    app.get('/user', (req, res) => {
        res.send(req.user);
    });

    app.get('/auth/github/callback', passport.authenticate('github'), (req, res) => {
        
        //console.log("***printing req.user ****");
        //console.log(req.user);
        //console.log("***END***");
        
        res.redirect('http://localhost:3000/mybookmark');
    });

  }