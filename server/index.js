const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('./database/database');

app.set('port', process.env.PORT || 5000);

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

app.use('/api', require('./routes/tasks'));

app.listen(app.get('port'),()=>{
   console.log(`Servidor conectado en el puerto ${app.get('port')}`);
});