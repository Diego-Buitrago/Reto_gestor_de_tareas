const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const app = express();

require('./database/database');

app.set('port', process.env.PORT || 5002);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//config Multer
const storage = multer.diskStorage({
   destination: path.join(__dirname,'public/uploads'),
   filename: (req, file, cb)=>{
       cb(null, new Date().getTime() + path.extname(file.originalname));
   }
});
app.use(multer({storage}).single('imagen'));

app.use(express.json());

app.use('/api', require('./send_mail/send_mail'));

app.use('/api', require('./routes/tasks'));
app.use('/api', require('./routes/user'));

app.listen(app.get('port'),()=>{
   console.log(`Servidor conectado en el puerto ${app.get('port')}`);
});