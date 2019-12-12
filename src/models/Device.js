const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    description: String,
    situation: Number,
    geometry: String,
    area: {
        id: Number
    },
    person: {
        id: Number
    }
});

module.exports = mongoose.model('Device', DeviceSchema);