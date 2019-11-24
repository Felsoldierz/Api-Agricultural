const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

// Habilitar o plugin para tratar o conteúdo do body como JSON
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/agriculturaldb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(routes);


app.listen(3000);