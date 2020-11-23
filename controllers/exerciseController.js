import database from ("../modules/database.js");

const exerciseController = function () { }

// create cardio
exerciseController.prototype.createCardioExercise = (createBody, callback) => {
    database.CardioExercise.create(createBody)
    .then(data => {callback(data) })
    .catch(err => {callback(err) });
}

// read cardio 
exerciseController.prototype.readCardioExercise = (id, callback) => {
    database.CardioExercise.findOne({_id: id})
    .then(data => {callback(data) })
    .catch(err => {callback(err) });
}

// update cardio
exerciseController.prototype.updateCardioExercise = (id, updateBody, callback) => {
    database.CardioExercise.updateOne({_id: id}, updateBody)
    .then(data => {callback(data) })
    .catch(err => {callback(err) });
}

// delete cardio
exerciseController.prototype.deleteCardioExercise = (id, callback) => {
    database.CardioExercise.deleteOne({_id: id})
    .then(data => {callback(data) })
    .catch(err => {callback(err) });
}

// create cardio
exerciseController.prototype.createResistanceExercise = (createBody, callback) => {
    database.ResistanceExercise.create(createBody)
    .then(data => {callback(data) })
    .catch(err => {callback(err) });
}

// read Resistance 
exerciseController.prototype.readResistanceExercise = (id, callback) => {
    database.ResistanceExercise.findOne({_id: id})
    .then(data => {callback(data) })
    .catch(err => {callback(err) });
}

// update Resistance
exerciseController.prototype.updateResistanceExercise = (id, updateBody, callback) => {
    database.ResistanceExercise.updateOne({_id: id}, updateBody)
    .then(data => {callback(data) })
    .catch(err => {callback(err) });
}

// delete Resistance
exerciseController.prototype.deleteResistanceExercise = (id, callback) => {
    database.ResistanceExercise.deleteOne({_id: id})
    .then(data => {callback(data) })
    .catch(err => {callback(err) });
}

module.exports = exerciseController