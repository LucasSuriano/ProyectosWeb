const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

router.use(bodyParser.json());
router.use(cors());

router.get('/index.html', (req,res) => {
    res.sendFile(path.join(__dirname, '../', '../', 'index.html'));
})

router.get('/contacto.html', (req,res) => {
    res.sendFile(path.join(__dirname, '../', '../', 'contacto.html'));
})

router.post('/contacto.html/enviarFormulario', (req, res) => {
    console.log(req.body.Nombre);
    console.log(req.body.Titulo);
    console.log(req.body.Correo);
    console.log(req.body.Mensaje);

    res.status(200).send('Envio Exitoso');
})

module.exports = router;