const mongoose = require('mongoose');

const SensorSchema = new mongoose.Schema({
    device: {
        id: String
    },
    datatype: {
        id: String
    }
});

module.exports = mongoose.model('Sensor', SensorSchema);