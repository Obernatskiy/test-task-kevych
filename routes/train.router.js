const {Router} = require("express")

const userController = require("../controllers/Train.controller");

const trainRouter = Router();
trainRouter.get('/', userController.getAllTrains);
trainRouter.post('/', userController.createTrain);
trainRouter.get('/filter', userController.filterTrains);

trainRouter.get('/:trainId', userController.getTrainById);
trainRouter.put('/:trainId', userController.updateTrainById);
trainRouter.delete('/:trainId', userController.deleteTrainById);


module.exports = trainRouter;