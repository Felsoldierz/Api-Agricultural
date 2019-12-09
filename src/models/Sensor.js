const mongoose = require('mongoose');

const SensorSchema = new mongoose.Schema({
    device_id: Number,
    datatype_id: Number
});

module.exports = mongoose.model('Sensor', SensorSchema);