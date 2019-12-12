const express = require('express');


const SensorController = require('../controllers/SensorController');


const router = express.Router();

router.post('/sensor',SensorController.create);
router.put('/sensor',SensorController.edit)
router.get('/sensor/area/:id',SensorController.showArea)
router.get('/sensor/area/:id/count', SensorController.showAreaCount)
router.get('/sensor/datatype/:id',SensorController.showDataTypeSensor)
router.get('/sensor/datatype/:id/count', SensorController.showDataTypeCount)
router.get('/:id/sensor',SensorController.showDeviceSensor);
router.get('/:id/sensor/count',SensorController.showDeviceCount)
router.get('/sensor/:id',SensorController.showSensor)
router.delete('/sensor/:id',SensorController.deleteSensor)




/*
router.get('/', (req, res) => {
    res.send("ok")
});

router.post('/', validator.validate({ body: UserValidationSchema }), (req, res) => {
    res.send("ok")
});

*/

module.exports = router;