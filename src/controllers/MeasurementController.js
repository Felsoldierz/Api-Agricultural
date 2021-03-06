const Measurement = require('../models/Measurement');
const Sensor = require('../models/Sensor');

module.exports = {
    async create(req, res) {
        const json = req.body;
        measurement = await Measurement.create(json);

        return res.json(measurement);
    },

    async edit(req, res) {
        const json = req.body;
        let measurement = await Measurement.findOne({ _id: json.id });

        if (measurement) {
            measurement = await Measurement.update({ _id: json.id}, json)
        }

        return res.json(measurement);
    },

    async show(req, res) {
        const { userid } = req.headers;

        const measurement = await Measurement.find({ 'person.id': userid})

        return res.json(measurement)
    },

    async showDeviceMeasurement(req, res) {
        const json = req.params;

        const measurement = await Measurement.find({'sensor.id' : Sensor.findOne({'device.id' : json.id})})

        return res.json(measurement)
    },

    async showDeviceMeasurementCount(req, res) {
        const json = req.params;
        const measurement = await Measurement.find({'sensor.id' : Sensor.find({'device.id' : json.id})})

        var count = Object.keys(measurement).length

        return res.json({"count": count})
    },

    async showSensorMeasurement(req, res) {
        const json = req.params;

        const measurement = await Measurement.find({ 'sensor.id': json.id })

        return res.json(measurement)
    },

    async showSensorMeasurementCount(req, res) {
        const json = req.params;
        const measurement = await Measurement.find({ 'sensor.id': json.id})

        var count = Object.keys(measurement).length

        return res.json({"count": count})
    },

    //verificar
    async showAreaMeasurement(req, res) {
        const json = req.params;
        
        const measurement = await Measurement.find({ 'area.id' : json.id })
        
        return res.json(measurement)
    },

    async showAreaMeasurementCount(req, res) {
        const json = req.params;
        const measurement = await Measurement.find({ 'area.id' : json.id })
  

        var count = Object.keys(measurement).length

        return res.json({"count": count})
    },
    async showDataTypeMeasurement(req, res) {
        const json = req.params;
        
        const measurement = await Measurement.find({ 'datatype.id' : json.id })
        
        return res.json(measurement)
    },

    async showDataTypeMeasurementCount(req, res) {
        const json = req.params;
        const measurement = await Measurement.find({ 'datatype.id' : json.id })
  

        var count = Object.keys(measurement).length

        return res.json({"count": count})
    },
    


    async showMeasurement(req, res) {
        const json = req.params;
        const measurement = await Measurement.find({ _id: json.id })

        return res.json(measurement)
    },

    async deleteMeasurement(req, res) {
        const json = req.params;
        let measurement = await Measurement.find({ _id: json.id })

        if(measurement){
            measurement = await Measurement.deleteOne({_id:json.id})
        }

        return res.json(measurement)
    },

}