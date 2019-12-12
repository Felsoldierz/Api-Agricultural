const express = require('express')

const router = express.Router()


const dataTypeRoutes = require('./routes/dataType')
const deviceRoutes = require('./routes/device')
const sensorRoutes = require('./routes/sensor')
const measurementRoutes = require('./routes/measurement')


router.use('/datatype',dataTypeRoutes)
router.use('/device',deviceRoutes)
router.use('/device',sensorRoutes)
router.use('/measurement',measurementRoutes)

/*
// Definindo as rotas para os métodos do controlador de user
// Agora, foram movidas para o arquivo de rotas do user --> routes/user.js
router.post('/user', UserController.store);
router.get('/user', UserController.show);
*/


/*

router.post('/users', (req, res) => {
    return res.json(req.body)
});

// req.params = Acessar route params (edição, delete)
router.put('/users/:id', (req, res) => {
    res.json({ id: req.params.id })
});

*/

// req.query: Obter dados a partir do query params (utilizado para filtros)
router.get('/', (req, res) => {
    //res.send("Hello World");
    res.send({ message: req.query.message });
});

module.exports = router;
