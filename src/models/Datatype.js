const mongoose = require('mongoose');

const DataTypeSchema = new mongoose.Schema({
    description: String,
    person_id: Number
});

module.exports = mongoose.model('DataType', DataTypeSchema);