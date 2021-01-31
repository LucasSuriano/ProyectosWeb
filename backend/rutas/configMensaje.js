/*const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'teuinformatica@gmail.com',
            pass: 'tupassword'
        }
    });

const mailOptions = {
    from: `”${formulario.nombre}” <${formulario.email}>`,
    to: 'teuinformatica@gmail.com',
    subject: formulario.asunto,
    html: `
        <strong>Nombre:</strong> ${formulario.nombre} <br/>
        <strong>E-mail:</strong> ${formulario.email} <br/>
        <strong>Mensaje:</strong> ${formulario.mensaje}`
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error)
        console.log(error)
    else
        console.log(info);
    });
}*/