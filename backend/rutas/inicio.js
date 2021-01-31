const express = require('express');
const router = express.Router();
const path = require('path');

/*router.get('/', (req, res) => {
    res.render('index.html');
})*/

router.get('/index.html', function(req,res) {
    res.sendFile(path.join(__dirname, '../', '../', 'index.html'));
})

router.get('/contacto.html', function(req,res) {
    res.sendFile(path.join(__dirname, '../', '../', 'contacto.html'));
})

module.exports = router;