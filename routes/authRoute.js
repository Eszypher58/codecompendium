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
      res.redirect('http://localhost:3000/mybookmark');
    });

    app.get('/auth/github', passport.authenticate('github',
    {
      scope: ['profile', 'email']
    }));

    app.get('/user', (req, res) => {
        res.send(req.user);
    });

    app.get('/auth/github/callback', passport.authenticate('github'), (req, res) => {
        res.redirect('http://localhost:3000/mybookmark');
    });

  }