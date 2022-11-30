const {statusCodes} = require("../constants");

module.exports = {
    checkIsTrainBodyValid: async (req, res, next) => {
        const {age, name} = req.body;

        if (Number.isNaN(+age) || age <= 0) {
            res.status(400).json('Wrong train age');
            res.status(statusCodes.BAD_REQUEST).json('Wrong train age');
            return;
        }

        if (name.length < 2) {
            res.status(400).json('Wrong train name');
            res.status(statusCodes.BAD_REQUEST).json('Wrong train name');
            return;
        }
        next();
    }
}