const functions = require('firebase-functions');
const express = require('express');
const crypto = require('crypto')
const fs = require('fs');

const app = express();

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/login', (request, response) => {
    try {
        const { login, password } = request.body;
        console.log(login, password);

        if (login != "user" || password != "1234") {
            return response.status(401).send({ error: 'Login falhou! Cheque suas credenciais.' });
        }

        response.send({
            "success": true,
            "request_token": crypto.randomBytes(20).toString('hex'),
            "expires_at": new Date(Date.now() + (30 * 86400 * 1000))
        });

    } catch (error) {
        response.status(400).send(error);
    }
});

app.get('/receitas', (request, response) => {
    let rawdata = fs.readFileSync('data/receitas.json');
    let receitas = JSON.parse(rawdata);
    response.send(receitas);
});

app.get('/receita/:id', (request, response) => {
    let idReceita = request.params.id;
    let rawdata = fs.readFileSync('data/receitas-detalhes.json');
    let receitas = JSON.parse(rawdata);

    receitas.forEach(function (receita) {
        if (receita.id == idReceita) {
            response.send(receita);
            return;
        }
        return response.status(401).send({ error: 'Receita não encontrada.' });
    });
});

exports.api = functions.https.onRequest(app);