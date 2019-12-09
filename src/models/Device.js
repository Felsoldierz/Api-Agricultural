const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    description: String,
    situation: Number,
    area_id: Number,
    person_id: Number
});

module.exports = mongoose.model('Device', DeviceSchema);