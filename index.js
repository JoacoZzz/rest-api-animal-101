//const express = require('express');
import express from 'express';
import {animal} from './routes/apiAnimal.js'
const app = express();
const port = 4000;

app.use('(/api/animal', animal)

app.listen(port, ()=>{
    console.log( `Escuchando en el puerto ${port}`);
});