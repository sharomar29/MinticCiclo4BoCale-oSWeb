const express = require('express');
require('dotenv').config();

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.zzx05.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority `;

const option = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(uri, option)
.then(() => console.log("Base de datos conectada correctamente."))
.catch((e) => console.log("Error en la conexión: " + e));

app.listen(process.env.PORT, () => {console.log("Servidor a su servicio en el puerto " + process.env.PORT)});