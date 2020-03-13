const { model, Schema } = require('mongoose')

const WorkoutSchema = new Schema({
    day: Date,
    exercises: [{
        type: {
            type: String
        },
        name: {
            type: String
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        } 
    }]
})

module.exports = model('workout', WorkoutSchema)