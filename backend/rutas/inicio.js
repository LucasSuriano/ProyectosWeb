const { Router } = require("express");
const express = require('express');
const { userInfo } = require("os");
const router = express.Router();

/*router.get('/', (req, res) => {
    res.render('index.html');
})*/

router.get('/', function(req,res) {
    res.sendFile(__dirname + '/index.html');
})

module.exports = router;