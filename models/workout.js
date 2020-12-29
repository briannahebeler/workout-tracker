const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                // trim: true,
                // required: "Enter a type of exercise"
            },
            name: {
                type: String,
                // trim: true,
                // required: "Enter a name for the exercise"
            },
            distance: {
                type: Number,
                // required: "Enter the distance"
            },
            duration: {
                type: Number,
                // required: "Enter the duration"
            },
            weight: {
                type: Number,
                // required: "Enter the weight"
            },
            reps: {
                type: Number,
                // required: "Enter the amount of reps"
            },
            sets: {
                type: Number,
                // required: "Enter the amount of sets"
            }
        }
    ],
    // totalDuration: {
    //     type: Number,
    // }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;