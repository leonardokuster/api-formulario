const express = require("express");
const db = require("../db/models");
const router = express.Router();

router.get("/", async (req, res) => {
    res.send("API está em funcionamento")
});


router.post("/", async (req, res) => {

    var data = req.body;

    await db.contatos.create(data).then((dataContato) => {
        return res.json({
            error: false,
            message: "Formulário enviado com sucesso!",
            data: dataContato 
        });
    }).catch(error => {
        console.error("Erro ao criar solicitação:", error);
        return res.status(500).json({
            error: true,
            message: "Não foi possível enviar o formulário, tente novamente."
        });
    });
});

module.exports = router;
