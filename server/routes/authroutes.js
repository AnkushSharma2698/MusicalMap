const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/spotify",
    passport.authenticate("spotify", {
      scope: ["user-read-email", "user-read-private"],
      showDialog: true
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
  app.get("auth/spotify/callback", passport.authenticate("spotify"));
  
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
