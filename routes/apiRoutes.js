const ExcerciseController = require("../controllers/exerciseController");
const WorkoutController = require("../controllers/workoutController");
const { response } = require("express");

// controller objects
const workout = new WorkoutController();
const excercise = new ExcerciseController();

function createExerciseType(body, cb) {
  if (body.type === "resistance") {
    excercise.createResistanceExcercise(body, (response) => {
      cb(response);
    });
  }
}

mondule.exports = (app) => {
  app.get("api/workouts", (req, res) => {
    workout.readAllWorkoutsPopulated((response) => {
      console.log(response);
      res.json(response);
    });
  });

  app.put("/api/workout/:id", (req, res) => {
    createExerciseType(req.body, (excercise) => {
      workout.insertExercise(req.params.id, exercise, (response) => {
        res.json(response);
      });
    });
  });

  app.post("/api/workouts", (req, res) => {
    workout.createWorkout((response) => {
      res.json(response);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    workout.readAllWorkoutsPopulated((response) => {
      res.json(response);
    });
  });
};
