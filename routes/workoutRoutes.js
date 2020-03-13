const router = require('express').Router()
const { Workout } = require('../models')

// Get All Workouts
router.get('/workouts', (req, res) => {
    Workout.find()
        .then(workouts => {
            res.json(workouts)
        })
        .catch(e => console.error(e))
})

// Get Workout by Date Range
router.get('/workouts/range', (req, res) => {
    Workout.find(req.body).limit(7)
        .then(workout => {
            res.json(workout)
        })
        .catch(e => console.error(e))
})

// Get ONE Workout
router.get('/workout/:id', (req, res) => {
    Workout.findById()
        .then(workout => {
            res.json(workout)
        })
})

// Update Workout
router.put("/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
      .then(dbWorkout => { res.json(dbWorkout) })
      .catch(e => console.error(e))
  })

// Create a Workout
router.post('/workouts', (req, res) => {
    Workout.create(req.body)
        .then(workout => res.json(workout))
        .catch(e => console.error(e))
})

// Delete a Workout
router.delete('/workout/:id', (req, res) => {
    Workout.remove(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
})

module.exports = router
