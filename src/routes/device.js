const express = require('express');
const { Validator } = require('express-json-validator-middleware');
const validator = new Validator({ allErrors: true }); // pass in options to the Ajv instance;

const DeviceController = require('../controllers/DeviceController');
const DeviceValidationSchema = require('../models/DeviceValidationSchema');

const router = express.Router();

router.post('/',validator.validate({ body: DeviceValidationSchema}),DeviceController.create);
router.get('/', DeviceController.show);
router.put('/',DeviceController.edit)
router.get('/count',DeviceController.count)
router.get('/person/:id', DeviceController.showPersonDevice)
router.get('/person/:id/count',DeviceController.showPersonDeviceCount)
router.get('/description/:value', DeviceController.showDescriptionDevice)
router.get('/description/:value/count',DeviceController.showDescriptionDeviceCount)
router.get('/area/:id', DeviceController.showAreaDevice)
router.get('/area/:id/count',DeviceController.showAreaDeviceCount)
router.get('/all',DeviceController.showAll)
router.get('/all/count',DeviceController.showAllCount)
router.get('/:id',DeviceController.showDevice)
router.delete('/:id',DeviceController.deleteDevice)




/*
router.get('/', (req, res) => {
    res.send("ok")
});

router.post('/', validator.validate({ body: UserValidationSchema }), (req, res) => {
    res.send("ok")
});

*/

module.exports = router;