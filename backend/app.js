//Modulos
const mysql = require('mysql');



const app = mysql.createConnection({
    host: "localhost",
    user: "teuinformatica",
    password: "teuinformatica"
})

app.connect( err => {
    if(err)
        throw err;
    console.log("El servidor esta activo.");
})