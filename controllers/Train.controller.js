const {statusCodes} = require('../constants')
const Train = require('../dataBase/Train')
const {trainService} = require("../services");

module.exports = {
    getAllTrains: async (req, res) => {
        const TrainsFromService = await Train.find();
        res.json(TrainsFromService);
    },

    createTrain: async (req, res) => {
        const train = await trainService.createTrain(req.body);

        res.status(statusCodes.CREATE).json(train);
    },

    getTrainById: async (req, res) => {
        const {trainId} = req.params;
        const train = await Train.findById(trainId);

        if (!train) {
            res.status(statusCodes.NOT_FOUND).json('Train not found');
            return;
        }

        res.json(train);
    },

    updateTrainById: async (req, res) => {
        const {trainId} = req.params;

        const train = await trainService.updateTrainById(trainId, req.body);

        res.status(statusCodes.CREATE).json(train);
    },

    deleteTrainById: async (req, res) => {
        const {trainId} = req.params;

        await trainService.deleteTrainById(trainId);

        res.sendStatus(statusCodes.NO_CONTENT);
    }
}