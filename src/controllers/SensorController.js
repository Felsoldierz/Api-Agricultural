const Sensor = require('../models/Sensor');
const Device = require('../models/Device');

module.exports = {
    async create(req, res) {
        const json = req.body;
        sensor = await Sensor.create(json);

        return res.json(sensor);
    },

    async edit(req, res) {
        const json = req.body;
        let sensor = await Sensor.findOne({ _id: json.id });

        if (sensor) {
            sensor = await Sensor.update({ _id: json.id}, json)
        }

        return res.json(sensor);
    },

    async showArea(req, res) {
        const json = req.body;
        let device = await Device.find({area_id: json.area_id})
        const sensor = await Sensor.find({ device_id: device._id })

        return res.json(sensor)
    },
    async showAreaCount(req, res) {
        const json = req.body;
        let device = await Device.find({area_id: json.area_id})
        const sensor = await Sensor.find({ device_id: device._id })

        var count = Object.keys(sensor).length

        return res.json({"count": count})
    },

    async showDataTypeSensor(req, res) {
        const json = req.params;

        const sensor = await Sensor.find({ datatype_id: json.datatype_id })
        
        return res.json(sensor)
    },

    async showDataTypeCount(req, res) {
        const json = req.params;

        const sensor = await Sensor.find({ datatype_id: json.datatype_id })
        
        var count = Object.keys(sensor).length

        return res.json({"count": count})
    },

    async showDeviceSensor(req, res) {
        const json = req.params;

        const sensor = await Sensor.find({ datatype_id: json.datatype_id })
        
        return res.json(sensor)
    },

    async showDeviceCount(req, res) {
        const json = req.params;

        const sensor = await Sensor.find({ device_id: json.device_id })
        
        var count = Object.keys(sensor).length

        return res.json({"count": count})
    },


    async showSensor(req, res) {
        const json = req.params;
        const sensor = await Sensor.find({ _id: json.id })

        return res.json(sensor)
    },

    async deleteSensor(req, res) {
        const json = req.params;
        let sensor = await Sensor.find({ _id: json.id })

        if(sensor){
            sensor = await Sensor.deleteOne({_id:json.id})
        }

        return res.json(sensor)
    },

}