const express = require("express");
const db = require("../db/models");
const router = express.Router();

router.get("/", async (req, res) => {
    res.send("API está em funcionamento");
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

router.get("/verificarContatos", async (req, res) => {
    try {
        const contatos = await db.contatos.findAll();
        res.status(200).json(contatos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/atualizarStatus/:id/status', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const contato = await db.contatos.findByPk(id);
        if (!contato) {
            return res.status(404).json({ message: 'Contato não encontrado' });
        }
        contato.status = status;
        await contato.save();
        res.status(200).json(contato);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;