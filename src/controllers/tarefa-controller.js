const Tarefa = require('../models/tarefa')
const mongoose = require('mongoose')

module.exports = (app) => {
    app.get('/tarefa', (req, resp) => {
        Tarefa.find({})
        .exec()
        .then( data => {
            resp.send(data)
        })
        .catch( err => {
            resp.send(err)
        })
    })

    app.post('/tarefa', (req, resp) => {
        const tarefa = new Tarefa({
            _id: new mongoose.Types.ObjectId(),
            titulo: req.body.titulo,
            descricao: req.body.descricao,
        });
        tarefa.save()
        .then(resolve => {
            console.log(resolve)
            resp.status(200).json(resolve)
        })
        .catch(err => {
            console.log(err)
            resp.status(500).json({"error": err})
        });
    })
}