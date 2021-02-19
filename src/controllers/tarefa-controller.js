const Tarefa = require('../models/tarefa')
const mongoose = require('mongoose')

module.exports = (app) => {
    app.get('/tarefa', async (req, resp) => {

        try {
            const buscaTarefas = await Tarefa.find({});
            if(buscaTarefas.length >= 0) {
                resp.status(200).json(buscaTarefas)
            } else {
                resp.status(404).json({mensagem: "Nenhum tarefa cadastrada"})
            }
        } catch (err) {
            resp.status(500).json({Error: err})
        }
    })

    app.get('/tarefa/:tarefaId', async (req, resp) => {
        const id = req.params.tarefaId;

        try {
            const buscaTarefasId = await Tarefa.findById({_id: id})
            if(buscaTarefasId) {
                resp.status(200).json(buscaTarefasId)
            } else {
                resp.status(404).json({mensagem: "Nenhuma tarefa encontrada com este ID"})
            }
        } catch (err) {
            resp.statu(500).json({ Error: err})
        }
    })

    app.post('/tarefa', async (req, resp) => {
        const tarefa = new Tarefa({
            _id: new mongoose.Types.ObjectId(),
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            status: req.body.status,
            data_de_criacao: new Date()
        });
        
        try {
            const criaTarefa = await tarefa.save()
            resp.status(200).send('Tarefa criada com sucesso')
        } catch (err) {
            resp.status(500).json({Error: err})
        }
    })

    app.delete('/tarefa/:tarefaId', async (req, resp) => {
        const id = req.params.tarefaId;

        try {
            const deletaTarefa = await Tarefa.remove({_id: id})

            resp.status(200).send('Tarefa deletada com sucesso')
        } catch (err) {
            resp.status(500).json({Error: err})
        }
    })
}