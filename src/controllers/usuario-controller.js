const User = require('../models/usuario')
const mongoose = require('mongoose')

module.exports = (app) => {
    app.get('/usuario', (req, resp) => {
        User.find().exec()
            .then(data => {
                if (data.length >= 0) {
                    resp.status(200).json(data)
                } else {
                    resp.send(404).json({
                        Mensagem: "Nenhum usuario encontrado"
                    })
                }
            })
            .catch(err => {
                resp.status(500).json({ error: err })
            })
    })

    app.get('/usuario/:usuarioId', (req, resp) => {
        const id = req.params.usuarioId;

        User.findById({ _id: id }).exec()
            .then(data => {
                resp.send(data)
            })
            .catch(err => {
                resp.send(err)
            })
    })

    app.post('/usuario', (req, resp) => {
        const usuario = new User({
            _id: new mongoose.Types.ObjectId(),
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        });
        usuario.save()
            .then(data => {
                resp.status(200).json(data)
            })
            .catch(err => {
                resp.status(500).json({ error: err })
            })
    });

    app.delete('/usuario/:usuarioId', (req, resp) => {
        const id = req.params.usuarioId;

        User.remove({_id: id}).exec()
        .then( data => {
            resp.status(200).json(data)
        })
        .catch( err => {
            resp.status(500).json({error: err})
        })
    })

}