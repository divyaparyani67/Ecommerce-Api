// import statement
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const { urlencoded } = require("body-parser");

const app = express();

// open mongoose connection to mongodb database
const db = require("./app/models");
const { connect } = require("mongodb");
const dbConfig = require("./app/config/db.config");
// const Role = db.role;

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // strictQuery: false
  })
  .then(()=>{
    console.log("Connected to MongoDB");
    // initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    // process.exit();
  });

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
