const mongoose = require('mongoose');

const MeasurementSchema = new mongoose.Schema({
    value: Number,
    description: String,
    datetime: Date,
    geometry: String,
    sensor: {
        id: String
    }
});

module.exports = mongoose.model('Measurement', MeasurementSchema);