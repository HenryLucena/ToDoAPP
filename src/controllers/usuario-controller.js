const User = require('../models/usuario')
const mongoose = require('mongoose')

module.exports = (app) => {
    app.get('/usuario', async (req, resp) => {

        try {
            const buscaUsuarios = await User.find({});
            if(buscaUsuarios.length >= 0) {
                resp.status(200).json(buscaUsuarios)
            } else {
                resp.status(404).json({Mensagem: "Nenhum usuário cadastrado"})
            }
        } catch {
            resp.status(500).json({error: err})
        }
        
    })

    app.get('/usuario/:usuarioId', async (req, resp) => {
        const id = req.params.usuarioId;

        try {
            const buscaUsuariosId = await User.findById({_id: id})
            if(buscaUsuariosId) {
                resp.status(200).json(buscaUsuariosId)
            } else {
                resp.status(404).json({Mensagem: "Usuario não encontrado"})
            }
        } catch (err) {
            resp.status(500).json({error: err})
        }
    })

    app.post('/usuario', async (req, resp) => {
        const usuario = new User({
            _id: new mongoose.Types.ObjectId(),
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        });

        try {
            const criaUsuario = await usuario.save()
            resp.status(200).send("Usuario criado com sucesso")
        } catch (err) {
            resp.status(500).json({Error: err})
        }
    });

    app.delete('/usuario/:usuarioId', async (req, resp) => {
        const id = req.params.usuarioId;

        try {
            const removeUsuario = User.remove({_id: id})
            resp.status(200).send('Usuario deletado com sucesso')
        } catch (err) {
            resp.status(500).json({Error: err})
        }
    })

}