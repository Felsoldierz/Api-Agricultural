const mongoose = require('mongoose');

const DataTypeSchema = new mongoose.Schema({
    description: String,
    person:{
        id:Number
    }
});

module.exports = mongoose.model('DataType', DataTypeSchema);