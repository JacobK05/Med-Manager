const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/medication');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  