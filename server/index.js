import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import cors from "cors";
import passportSetup from "./config/passportConfig.js";
import authRoute from "./routes/auth.js";

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["social"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use("/auth", authRoute);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));

app.listen("5000", () => {
  console.log("Server is running on port 5000");
});
