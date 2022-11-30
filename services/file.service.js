const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(process.cwd(), 'dataBase', 'trains.json');

const reader = async () => {
    try {
        const buffer = await fs.readFile(pathToFile);
        const data = buffer.toString();

        const trains = data ? JSON.parse(data) : [];

        return trains.sort((a, b) => a.id - b.id);
    } catch (e) {
        console.log(e);
    }
}

const writer = async (trains) => {
    try {
        await fs.writeFile(pathToFile, JSON.stringify(trains));
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getTrains: () => {
        return reader();
    },

    insertTrain: async (trainObject) => {
        const trains = await reader();

        trainObject.id = trains.length ? trains[trains.length - 1].id + 1 : 1;
        trains.push(trainObject);

        await writer(trains);

        return trainObject;
    },

    getOneTrain: async (id) => {
        const trains = await reader();

        return trains.find((train) => train.id === id);
    },

    updateTrain: async (id, data) => {
        const trains = await reader();

        const index = trains.findIndex((train) => train.id === id);

        if (index < 0) return;

        trains[index] = { ...trains[index], ...data };
        await writer(trains);

        return trains[index];
    },

    deleteOneTrain: async (id) => {
        const trains = await reader();

        const index = trains.findIndex((train) => train.id === id);

        if (index < 0) return;

        const train = trains[index];
        trains.splice(index, 1);

        await writer(trains);
        return train;
    }
}