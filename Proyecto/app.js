const express = require('express');
const app = express();

const contadorRouter = require('./src/Routers');

app.use(express.static('public'));
app.use(express.json());

app.use('/', contadorRouter);

const PORT = 80;

app.listen(PORT, ()=>{
    console.log(`servidor funcionando en ${PORT}`);
});