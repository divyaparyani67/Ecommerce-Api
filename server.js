// import statement
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const { urlencoded } = require("body-parser");

const app = express();

//cors for browser
var corsOptions = {
  origin: "http://localhost:8081",
};

// middleware
app.use(cors(corsOptions));

app.use(express.json()); // parse requests of content-type - application/json

app.use(express.urlencoded({ extended: true })); //// parse requests of content-type - application/x-www-form-urlencoded

app.use(
  cookieSession({
    name: "annashakti- fooddonationapp",
    // keys: ['key1', 'key2'],
    secret: "COOKIE_SECRET", //// should use as secret environment variable
    httpOnly: true,
  })
);

//Simple route

app.get("/", (req, res) => {
  res.json({ message: "Welcome to annashakti application." });
});

//set port, listen for requests

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
