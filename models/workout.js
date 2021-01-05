const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },

  exercises: [
    {
      name: {
        type: String,
        required: true,
        required: 'Enter type of excercise',
      },
      type: {
        type: String,
        required: true,
        required: 'Enter name of excercise',
      },
      duration: {
        type: Number,
        required: true,
        required: 'Enter excercise duration (minutes)',
      },
      distance: { type: Number },
      weight: { type: Number },
      sets: { type: Number },
      reps: { type: Number },
    },
  ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
