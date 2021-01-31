//Modulos
const express = require('express');
const app = express();                      //Framework de servidor
const mysql = require('mysql');             //MySql
const bodyParser = require('body-parser');  //Parsea los campos provenientes del front-end y los convierte en objetos
const cors = require('cors');               //Permite uso de AJAX
const nodemailer =('nodemailer');           //Permite el envio de mails


const configMensaje = require('rutas/configMensaje');


require('dotenv/config');                   //Permite variables de ambiente

//Variables del Ambiente
const PUERTO = process.env.PORT || 3000;


//Middlewares
app.use(bodyParser.json());
app.use(cors());

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


