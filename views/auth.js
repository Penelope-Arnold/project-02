module.exports = {
    //Can bring this in and add this as middleware to any route that we want to be protected
      ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
          return next();
        }
        req.flash('error_msg', 'Please log in to view that resource');
        res.redirect('/users/login');
      },
      forwardAuthenticated: function(req, res, next) {
        if (!req.isAuthenticated()) {
          return next();
        }
        res.redirect('/dashboard');
      }
    };