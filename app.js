const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'login.html'));
});

app.get('/entrada', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'entrada.html'));
});

app.get('/saída', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'saída.html'));
});