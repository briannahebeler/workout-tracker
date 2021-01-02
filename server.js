// dependencies //
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3100;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

// connection to mongodb //
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout_tracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// routes //
app.use(require("./routes/html.js"));
app.use(require("./routes/api.js"));

// Set the app to listen on port //
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
