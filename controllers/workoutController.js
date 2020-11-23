const database = require("../models/database.js");

const workoutController = function () {};

// CRUD methods
workoutController.prototype.createWorkout = (callback) => {
  database.Workout.create({
    day: Date.now(),
    totalDuration: 0,
  })
    .then((data) => {
      callback(data);
    })
    .catch(({ message }) => {
      callback(message);
    });
};

workoutController.prototype.readAllWorkouts = (callback) => {
  database.workout
    .find({})
    .then((data) => {
      data.forEach((workout) => {
        workout.exercises = workout.resistanceExercises.concat(
          workout.cardioExercies
        );
      });
      callback(data);
    })
    .catch((err) => {
      callback(err);
    });
}

// read workout
workoutController.prototype.readWorkout = (id, callback) => {
  database.Workout.findOne({ _id: id })
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      callback(err);
    });
}

// update workout
workoutController.prototype.updateWorkout = (id, updateBody, callback) => {
  database.Workout.updateOne({ _id: id }, updateBody)
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      callback(err);
    });
}

//add new workout 
workoutController.prototype.insertExercise = (id, callback) => {
    database.Workout.findOne({ _id: id })
    .then(({totalDuration}) => {
        totalDuration += exercise.duration;

        if (exercise.type === 'resistance') {
            database.Workout.updateOne({_id: id}, {$push: {resistanceExercises: exercise}, totalDuration: totalDuration}, {new: true})
            .then(data => {
                callback(data);
              })
              .catch(err => {callback(err) });
            })
            .catch(err => {callback(err)});
        }

workoutController.prototype.deleteWorkout = (id, callback) => {
    database.workout.deleteOne({_id: id})
    .then(data => {callback(data)})
    .catch(({message}) => {callback(message)})
}

module.exports = workoutController;