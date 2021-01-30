//Modulos
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');


require('dotenv/config');


//Variables del Ambiente
const PUERTO = process.env.PORT || 3000;


//Middlewares
app.use(bodyParser.json());


//Rutas
const api = process.env.API_URL || '/teuinformatica';
const inicioRuta = require('./rutas/inicio');

app.use(`${api}/inicio`, inicioRuta);

//MySql
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teuinformatica'
})


//Comprobar Conexion
conexion.connect( error => {
    if(error)
        throw error;
    console.log('La base de datos esta activa');
})

app.listen(PUERTO, () => {
    console.log(`El servidor esta corriendo en el puerto ${PUERTO}`);
})


