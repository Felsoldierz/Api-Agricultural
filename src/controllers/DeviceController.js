const Device = require('../models/Device');

module.exports = {
    async create(req, res) {
        const json = req.body;
        device = await Device.create(json);

        return res.json(device);
    },

    async edit(req, res) {
        const json = req.body;
        let device = await Device.findOne({ _id: json.id });

        if (device) {
            device = await Device.update({ _id: json.id}, json)
        }

        return res.json(device);
    },

    async show(req, res) {
        const { userid } = req.headers;

        const device = await Device.find({'person.id' : userid})

        return res.json(device)
    },

    async showAll(req, res) {
        const json = req.body;
        const device = await Device.find()

        return res.json(device)
    },
  

    async count(req, res) {
        const { userid } = req.headers;

        const device = await Device.find({'person.id' : userid})
        var count = Object.keys(device).length

        return res.json({"count": count})
    },

    async showPersonDevice(req, res) {
        const json = req.params;

        const device = await Device.find({'person.id' : json.id})

        return res.json(device)
    },

    async showPersonDeviceCount(req, res) {
        const json = req.params;
        const device = await Device.find({'person.id' : json.id})

        var count = Object.keys(device).length

        return res.json({"count": count})
    },

    async showDescriptionDevice(req, res) {
        const json = req.params;
        
        const device = await Device.find({ description: json.value })
        
        return res.json(device)
    },

    async showDescriptionDeviceCount(req, res) {
        const json = req.params;
        const device = await Device.find({ description: json.value })
  

        var count = Object.keys(device).length

        return res.json({"count": count})
    },

    async showAreaDevice(req, res) {
        const json = req.params;
        
        const device = await Device.find({'area.id' : json.id})
        
        return res.json(device)
    },

    async showAreaDeviceCount(req, res) {
        const json = req.params;
        const device = await Device.find({'area.id' : json.id})
  

        var count = Object.keys(device).length

        return res.json({"count": count})
    },

    async showAllCount(req, res) {
        const json = req.body;
        const device = await Device.find()

        var count = Object.keys(device).length

        return res.json({"count": count})
    },

    async showDevice(req, res) {
        const json = req.params;
        const device = await Device.find({ _id: json.id })

        return res.json(device)
    },

    async deleteDevice(req, res) {
        const json = req.params;
        let device = await Device.find({ _id: json.id })

        if(device){
            device = await Device.deleteOne({_id:json.id})
        }

        return res.json(device)
    },

}