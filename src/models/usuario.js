const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    email: String,
    senha: String
});

module.exports = mongoose.model('Usuarios', usuarioSchema);