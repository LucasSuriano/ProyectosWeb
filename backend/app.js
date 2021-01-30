//Modulos
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');


//Variables del ambiente
const PUERTO = process.env.PUERTO;

//Middlewares
app.use(bodyParser.json());


//MySql
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'teuinformatica'
})

conexion.connect( error => {
    if(error)
        throw error;
    console.log('La base de datos esta corriendo');
})

app.listen(PUERTO, () => {
    console.log(`El servidor esta corriendo en el puesto ${PUERTO}`)
})