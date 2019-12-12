const express = require('express');


const DeviceController = require('../controllers/DeviceController');


const router = express.Router();

router.post('/',DeviceController.create);
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