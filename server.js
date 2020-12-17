const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "#";
const collections = ["#"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/all", (req, res) => {
  db.animals.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});