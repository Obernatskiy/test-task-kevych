const Train = require('../dataBase/Train')

module.exports = {
    createTrain(trainObject) {
        return Train.create(trainObject)
    },

    updateTrainById(trainId, newTrainObject) {
        return Train.updateOne({_id: trainId}, newTrainObject, {new: true});
    },

    deleteTrainById(trainId) {
        return Train.deleteOne({ _id: trainId });
    }
}