const Measurement = require('../models/Measurement');

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
        const json = req.body;

        const measurement = await Measurement.find({ person_id: json.person_id })

        return res.json(measurement)
    },

    async showDeviceMeasurement(req, res) {
        const json = req.params;

        const measurement = await Measurement.find({ device_id: json.id })

        return res.json(measurement)
    },

    async showDeviceMeasurementCount(req, res) {
        const json = req.params;
        const measurement = await Measurement.find({ device_id: json.device_id })

        var count = Object.keys(measurement).length

        return res.json({"count": count})
    },

    async showSensorMeasurement(req, res) {
        const json = req.params;

        const measurement = await Measurement.find({ sensor_id: json.sensor_id })

        return res.json(measurement)
    },

    async showSensorMeasurementCount(req, res) {
        const json = req.params;
        const measurement = await Measurement.find({ sensor_id: json.sensor_id })

        var count = Object.keys(measurement).length

        return res.json({"count": count})
    },

    //verificar
    async showAreaMeasurement(req, res) {
        const json = req.params;
        
        const measurement = await Measurement.find({ area_id : json.area_id })
        
        return res.json(measurement)
    },

    async showAreaMeasurementCount(req, res) {
        const json = req.params;
        const measurement = await Measurement.find({ area_id: json.area_id })
  

        var count = Object.keys(measurement).length

        return res.json({"count": count})
    },
    async showDataTypeMeasurement(req, res) {
        const json = req.params;
        
        const measurement = await Measurement.find({ datatype_id : json.datatype_id })
        
        return res.json(measurement)
    },

    async showDataTypeMeasurementCount(req, res) {
        const json = req.params;
        const measurement = await Measurement.find({ datatype_id : json.datatype_id })
  

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