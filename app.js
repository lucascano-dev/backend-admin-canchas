const express = require('express');
const app = express();
const dbConnection = require('./database/config');
const cors = require('cors'); //Configuracion: El Intercambio de Recursos de Origen Cruzado (CORS) es un mecanismo basado en cabeceras HTTP que permite a un servidor indicar qué dominios, esquemas o puertos distintos al suyo pueden cargar recursos desde él. En otras palabras, es una forma de permitir o restringir las solicitudes entre dominios diferentes.
require('dotenv').config();
console.log(process.env.PORT);

app.use(express.json()); //Lectura y parseo del body: Con esto consigo los formatos JSON que llegeuen. Es paraleer las peticiones request que llegan desde el frontend, traduciendo el JSON a un objeto de JavaScript

app.use(cors());

app.use('/auth', require('./router/authRouter'));

dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`Ejecutando server en puerto ${process.env.PORT}`);
});
