const { Router} = require('express');
const router = Router();
require('dotenv').config();

//nodemailer
smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport(
  smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
  })
);

router.post('/send_mail', (req, res) => {
  let { to, subject, username, password } = req.body;
  console.log(username)
  contentHTML = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title></title>
  </head>
  
  <body style="background-color:#2271b3">
      <div style="max-width: 625px;
          margin-top: 100px;
          margin-left: auto;
          background-color: white;
          margin-bottom: 0;
          border-radius: 10px;
          margin-right: auto
          ">
          <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;
          border-bottom-style:none;
          border-right-style:none;
          border-top-style:none;
          border-left-style:none;
          font-family:Helvetica,
          Arial,sans-serif" width="100%">
              <tbody>
                  <tr>
                      <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJF2gAza2etmmOI1cO0vaaqNiOOMDeq6j2cQ&usqp=CAU" alt="logo" width="250"
                              style="margin: 30px auto 30px 35px;
                              width: 60%"></td>
                  </tr>
                  <tr>
                      <td>
                          <div style="margin-top:10px;">
                              <span style="font-weight: bold;
                          font-family: Arial, Helvetica, sans-serif;
                          margin-left: 35px;
                          ">
                                  Bienvenid@ al gestor de tareas creado por Diego Buitrago,<br> 
				            tu registro ha sido exitoso!
  
                              </span>
                          </div>
                      </td>
                      <br>
                  <tr>
                      <td>
                          <div style="margin-top:20px;
                              margin-left: 35px;
                              margin-bottom: 30px;
                              ">
                              <span style="font-family: Arial, Helvetica, sans-serif;
                              ">Esta es una plataforma virtual en la cual puedes gestionar tus tareas diarias.
                              </span>
                          </div>
  
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div style="margin-top:20px;
                              margin-left: 35px;
                              margin-bottom: 30px;
                              ">
                              <span style="font-family: Arial, Helvetica, sans-serif;
                              ">Puedes ingresar con este usuario y contraseña:
                              </span>
                          </div>
  
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <span style="font-family: Arial, Helvetica, sans-serif;
                              font-weight: bold;
                              margin-left: 35px;
                              margin-top: 10px;
                              ">Usuario: ${username}</span>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <span style="font-family: Arial, Helvetica, sans-serif;
                              font-weight: bold;
                              margin-left: 35px;
                              margin-top: 10px;
                              ">Contraseña: ${password}</span>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          
                          <div style="width: 140px;
                          height: 20px;
                          margin-top: 30px;
                          margin-left: auto;
                          margin-right: auto;
                          background-color: #2e1f4a;
                          color: white;
                          border-radius: 10px;
                          padding: 15px;
                          cursor: pointer;
                          margin-bottom: 20px;
                          text-align: center;
                          font-weight: bold;
                          font-size: 20px;"><a style="text-decoration:none; color: white;" href="www.google.com">Ir a perfil</a></div>
                          
                          
                      </td>
                  </tr>
                  </tr>
              </tbody>
          </table>
      </div>
  </body>
  
  </html>`;
  const mailOptions = {
    from: 'Diego Buitrago',
    to: to,
    subject: subject,
    html: contentHTML,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`sent: ${info.response}`);
      res.json({ message: 'Correo enviado' });
    }
  });
});

module.exports = router;