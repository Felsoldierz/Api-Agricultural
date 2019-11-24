const mongoose = require('mongoose');

const DataTypeSchema = new mongoose.Schema({
    id: Number,
    description: String,
    person_id: Number
});

module.exports = mongoose.model('DataType', DataTypeSchema);