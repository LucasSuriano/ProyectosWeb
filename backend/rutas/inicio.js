const express = require('express');
const router = express.Router();
const path = require('path');

/*router.get('/', (req, res) => {
    res.render('index.html');
})*/

router.get('/home', function(req,res) {
    res.sendFile(path.join(__dirname, '../', '../', 'index.html'));
})

module.exports = router;