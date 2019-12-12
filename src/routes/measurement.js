const express = require('express');
const { Validator } = require('express-json-validator-middleware');
const validator = new Validator({ allErrors: true }); // pass in options to the Ajv instance;

const MeasurementController = require('../controllers/MeasurementController');
const MeasurementValidationSchema = require('../models/MeasurementValidationSchema');

const router = express.Router();

router.post('/',validator.validate({ body: MeasurementValidationSchema}),MeasurementController.create);
router.get('/', MeasurementController.show);
router.put('/',MeasurementController.edit)
router.get('/device/:id', MeasurementController.showDeviceMeasurement)
router.get('/device/:id/count',MeasurementController.showDeviceMeasurementCount)
router.get('/sensor/:id', MeasurementController.showSensorMeasurement)
router.get('/sensor/:id/count',MeasurementController.showDeviceMeasurementCount)
router.get('/area/:id', MeasurementController.showAreaMeasurement)
router.get('/area/:id/count',MeasurementController.showAreaMeasurementCount)
router.get('/datatype/:id', MeasurementController.showDataTypeMeasurement)
router.get('/datatype/:id/count',MeasurementController.showDataTypeMeasurementCount)
router.get('/:id',MeasurementController.showMeasurement)
router.delete('/:id',MeasurementController.deleteMeasurement)




/*
router.get('/', (req, res) => {
    res.send("ok")
});

router.post('/', validator.validate({ body: UserValidationSchema }), (req, res) => {
    res.send("ok")
});

*/

module.exports = router;