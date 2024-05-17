const express = require("express");
const cors = require('cors');
const app = express();
const sequelize = require('sequelize');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type"); 
    next();
});

app.use(cors());


const contatos = require("../controllers/contatos");
app.use('/contato', contatos);

sequelize.sync().then(() => {
    app.listen(8080, () => {
        console.log("Servidor iniciado na porta 8080: http://localhost:8080");
    });
});


