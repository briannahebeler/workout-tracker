const router = require("express").Router();
const Workout= require("../models/workout.js");

// get workout data //
router.get("api/workouts", (req, res) => {
    console.log("inside get workout data");
    Workout.find({}, (err,data) => {
        console.log(data);
        if (err) {
            res.json(err);
        }
        else {
            res.json(data);
        }
    })
})

// create a new workout session //

// update existing workout //

// get stats for all workouts chart //

module.exports = router;