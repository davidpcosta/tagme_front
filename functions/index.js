const functions = require('firebase-functions');
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/receitas', (request, response) => {
    let rawdata = fs.readFileSync('data/receitas.json');
    let receitas = JSON.parse(rawdata);
    response.send(receitas);
});

app.get('/receita', (request, response) => {
    let rawdata = fs.readFileSync('data/receitas.json');
    let receitas = JSON.parse(rawdata);
    response.send(receitas[2]);
});

exports.api = functions.https.onRequest(app);