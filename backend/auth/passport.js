const passport = require("passport");
const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/funterest";
const db = pgp(connectionString);

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    db.one("SELECT * FROM users WHERE email = ${email}", {
      email: email
    })
      .then(user => {
        done(null, user.email);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
