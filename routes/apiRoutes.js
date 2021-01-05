const router = require('express').Router();
const Workout = require('../models/workout');

// corresponding GET request to /api/workouts
router.get('/api/workouts', (req, res) => {
  Workout.find({})
    .then((result) => {
      console.log(`Result: ${result}`);
      res.json(result);
    })
    .catch((err) => {
      console.log(`ERROR: ${err}`);
      res.status(500).json(err);
    });
});

// corresponding POST request to /api/workouts
router.post('/api/workouts', ({ body }, res) => {
  Workout.create(body)
    .then((result) => {
      console.log(`Result: ${result}`);
      res.json(result);
    })
    .catch((err) => {
      console.log(`ERROR: ${err}`);
      res.status(500).json(err);
    });
});

// corresponding GET request to /api/workouts/range
router.get('/api/workouts/range', (req, res) => {
  Workout.find({})
    .limit(7)
    .then((result) => {
      console.log(`Result: ${result}`);
      res.json(result);
    })
    .catch((err) => {
      console.log(`ERROR: ${err}`);
      res.status(500).json(err);
    });
});

// corresponding PUT request to /api/workouts/:id
router.put('/api/workouts/:id', ({ params, body }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((result) => {
      console.log(`Result: ${result}`);
      res.json(result);
    })
    .catch((err) => {
      console.log(`ERROR: ${err}`);
      res.json(err);
    });
});

module.exports = router;
