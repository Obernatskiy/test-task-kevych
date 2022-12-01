const {Schema, model} = require('mongoose');

const trainSchema = new Schema({
        name: {
            type: String, trim: true, required: true, toUpperCase: true
        },
        departure: {type: String},
        arrival: {type: String},
        number: {type: Number}
    },
    {
        versionKey: false
    });

module.exports = model('train', trainSchema);