const router = require("express").Router();
const { Workout } = require("../models/workout.js");

// get workout data //
router.get("api/workouts", (req, res) => {
    console.log("inside get workout data");
    Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

// create a new workout session //
router.post("api/workouts", ({ body }, res) => {
    console.log("inside creation of new workout session");
    console.log(body);
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err)
    })
});

// update existing workout //

// get stats for all workouts chart //

module.exports = router;