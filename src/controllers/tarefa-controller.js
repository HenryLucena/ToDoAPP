const Tarefa = require('../models/tarefa')
const mongoose = require('mongoose')

module.exports = (app) => {
    app.get('/tarefa', (req, resp) => {
        Tarefa.find()
            .exec()
            .then(data => {
                if (data.length >= 0) {
                    console.log(data)
                    resp.status(200).json(data)
                } else {
                    resp.status(404).json({
                        mensagem: 'Nenhuma tarefa cadastrada'
                    })
                }
            })
            .catch(err => {
                console.log(err)
                resp.status(500).json({ error: err })
            })
    })

    app.get('/:tarefaId', (req, resp) => {
        const id = req.params.tarefaId;

        Tarefa.findById(id)
            .exec()
            .then(data => {
                data ? 
                resp.status(200).json(data) : 
                resp.status(404).json({
                    messagem: "Tarefa não encontrada pelo ID informado"
                })
            })
            .catch(err => {
                resp.status(500).json({
                    error: err
                })
            })
    })

    app.post('/tarefa', (req, resp) => {
        const tarefa = new Tarefa({
            _id: new mongoose.Types.ObjectId(),
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            status: req.body.status
        });
        tarefa.save()
            .then(data => {
                resp.status(200).json(data)
            })
            .catch(err => {
                resp.status(500).json({ "error": err })
            });
    })

    app.delete('/:tarefaId', (req, resp) => {
        const id = req.params.tarefaId;

        Tarefa.remove({ _id: id })
            .exec()
            .then(data => {
                resp.status(200).json(data);
            })
            .catch(err => {
                resp.status(500).json({ error: err })
            })
    })
}