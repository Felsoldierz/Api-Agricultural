const DataType = require('../models/DataType');


/**
 * 
 *   index: Listar todos registros;
 *   show: Exibir um registro;
 *   store: Criar novo registro;
 *   update: Alterar um registro;
 *   destroy: Remover um registro
 */
module.exports = {
    async create(req, res) {
        const json = req.body;
        datatype = await DataType.create(json);
        return res.json(datatype);
    },

    async edit(req, res) {
        const json = req.body;
        let datatype = await DataType.findOne({_id: json.id});

        if (datatype) {
            datatype = await DataType.update({ _id: json.id}, json)
        }

        return res.json(datatype);
    },

    async show(req, res) {
        const { userid } = req.headers;
        const datatype = await DataType.find({'person.id' : userid})

        return res.json(datatype)
    },

    async showAll(req, res) {
        const json = req.body;
        const datatype = await DataType.find()

        return res.json(datatype)
    },
  

    async count(req, res) {
        const { userid } = req.headers;

        const datatype = await DataType.find({'person.id' : userid})
        var count = Object.keys(datatype).length

        return res.json({"count": count})
    },

    async showPersonDataType(req, res) {
        const json = req.params;

        const datatype = await DataType.find({'person.id' : json.id})

        return res.json(datatype)
    },

    async showPersonDataTypeCount(req, res) {
        const json = req.params;
        const datatype = await DataType.find({'person.id' : json.id})

        var count = Object.keys(datatype).length

        return res.json({"count": count})
    },

    async showDescriptionDataType(req, res) {
        const json = req.params;
        
        const datatype = await DataType.find({ description: json.value })
        
        return res.json(datatype)
    },

    async showDescriptionDataTypeCount(req, res) {
        const json = req.params;
        const datatype = await DataType.find({ description: json.value })
  

        var count = Object.keys(datatype).length

        return res.json({"count": count})
    },

    async showAllCount(req, res) {
        const json = req.body;
        const datatype = await DataType.find()

        var count = Object.keys(datatype).length

        return res.json({"count": count})
    },

    async showDataType(req, res) {
        const json = req.params;
        const datatype = await DataType.find({ _id: json.id })

        return res.json(datatype)
    },

    async deleteDataType(req, res) {
        const json = req.params;
        let datatype = await DataType.find({ _id: json.id })

        if(datatype){
            datatype = await DataType.deleteOne({_id:json.id})
        }

        return res.json(datatype)
    },

}