const express = require('express');
const { Validator } = require('express-json-validator-middleware');
const validator = new Validator({ allErrors: true }); // pass in options to the Ajv instance;


const DataTypeController = require('../controllers/DataTypeController');
const DataTypeValidationSchema = require('../models/DataTypeValidationSchema');

const router = express.Router();

router.post('/',validator.validate({ body: DataTypeValidationSchema}),DataTypeController.create);
router.get('/', DataTypeController.show);
router.put('/',DataTypeController.edit)
router.get('/count',DataTypeController.count)
router.get('/person/:id', DataTypeController.showPersonDataType)
router.get('/person/:id/count',DataTypeController.showPersonDataTypeCount)
router.get('/description/:value', DataTypeController.showDescriptionDataType)
router.get('/description/:value/count',DataTypeController.showDescriptionDataTypeCount)
router.get('/all',DataTypeController.showAll)
router.get('/all/count',DataTypeController.showAllCount)
router.get('/:id',DataTypeController.showDataType)
router.delete('/:id',DataTypeController.deleteDataType)




/*
router.get('/', (req, res) => {
    res.send("ok")
});

router.post('/', validator.validate({ body: UserValidationSchema }), (req, res) => {
    res.send("ok")
});

*/

module.exports = router;