import passport from "passport";
import dotenv from "dotenv";
import passportGoogle from "passport-google-oauth20";

dotenv.config();
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);

      // mongodb
      // const user = {
      //   username: profile.displayName,
      //   avatar: profile.photos[0].value,
      // }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
